import type { FastifyInstance } from "fastify";


export default async function routes(app: FastifyInstance) {
    app.get("/ping", async () => ({ msg: "pongg" }));

}