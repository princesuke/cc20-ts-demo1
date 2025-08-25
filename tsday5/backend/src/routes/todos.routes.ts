import type { FastifyInstance } from "fastify";
import {
    TodoSchema,
    TodoCreateSchema,
    TodoUpdateSchema,
    ParamsIdSchema,
    type Todo,
    type TodoCreate,
    type TodoUpdate,
    type ParamsId
} from "../schemas/todo.schema";
import { TodoService } from "../services/todo.service";
import { toTodoOut } from "../types/todo.mapper";

export default async function routes(app: FastifyInstance) {
    app.get("/ping", async () => ({ msg: "pongg" }));

    app.get<{ Reply: Todo[] }>("/todo",
        {
            schema: { response: { 200: { type: "array", items: TodoSchema } } }
        },
        async () => ((await TodoService(app).list()).map(toTodoOut))

    );

    app.post<{ Body: TodoCreate; Reply: Todo | { error: string } }>("/todos", {
        schema: { body: TodoCreateSchema, response: { 201: TodoSchema } }
    },
        async (req, reply) => {
            const create = await TodoService(app).create({ title: req.body.title });
            return reply.code(201).send(toTodoOut(create));
        }
    );

    app.patch<{ Params: ParamsId; Body: TodoUpdate; Reply: Todo }>(
        "/todos/:id",
        {
            schema: {
                params: ParamsIdSchema,
                body: TodoUpdateSchema,
                response: { 200: TodoSchema }
            }
        },
        async (req) => {
            const update = await TodoService(app).update(req.params.id, req.body);
            return toTodoOut(update);
        }
    )

    app.delete<{ Params: ParamsId }>(
        "/todos/:id",
        { schema: { params: ParamsIdSchema } },
        async (req, reply) => {
            await TodoService(app).remove(req.params.id);
            return reply.code(204).send(null);
        }
    )
}