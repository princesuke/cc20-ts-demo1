import axios, { AxiosError } from "axios";
import { TodoSchema, type TodoCreate, type TodoUpdate } from "../types/todo";
import { z } from "zod";

const ZTodos = z.array(TodoSchema);

const BASE = "http://localhost:3000";

export const Api = {
    list: async () => {
        try {
            const res = await axios.get(`${BASE}/todos`);
            return ZTodos.parse(res.data);

        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                throw new Error(`HTTP ${err.status}: ${err.response?.data}`);
            }
            throw err;
        }
    },
    create: async (payload: TodoCreate) => {
        try {
            const res = await axios.post(`${BASE}/todos`, payload)
            return TodoSchema.parse(res.data);
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                throw new Error(`HTTP ${err.status}`);
            }
            throw err;
        }
    },
    update: async (id: number, payload: TodoUpdate) => {
        try {
            const res = await axios.patch(`${BASE}/todos/${id}`, payload);
            return TodoSchema.parse(res.data);
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                throw new Error(`HTTP ${err.status}`);
            }
            throw err;
        }
    },
    remove: async (id: number) => {
        try {
            await axios.delete(`${BASE}/todos/${id}`);
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                throw new Error(`HTTP ${err.status}`);
            }
            throw err;
        }
    }
}