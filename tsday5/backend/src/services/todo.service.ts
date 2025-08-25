import type { FastifyInstance } from "fastify";
import type { TodoEntity } from "../types/todo";

export const TodoService = (app: FastifyInstance) => ({
    async list(): Promise<TodoEntity[]> {
        const rows = await app.prisma.todo.findMany({ orderBy: { id: "asc" } });
        return rows;
    },

    async create(input: { title: string }): Promise<TodoEntity> {
        const row = await app.prisma.todo.create({ data: { title: input.title } });
        return row;
    },

    async update(id: number, input: { title?: string; done?: boolean }): Promise<TodoEntity> {
        const row = await app.prisma.todo.update({ where: { id }, data: input });
        return row;
    },

    async remove(id: number): Promise<boolean> {
        await app.prisma.todo.delete({ where: { id } });
        return true;
    }
})