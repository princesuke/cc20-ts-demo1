import type { Todo } from "../schemas/todo.schema";
import type { TodoEntity } from "./todo";

export const toTodoOut = (e: TodoEntity): Todo => ({
    id: e.id,
    title: e.title,
    done: e.done,
    createAt: e.createdAt.toISOString()
});