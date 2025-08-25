import Fastify from "fastify";

import prisma from "./plugins/prisma";

const app = Fastify({ logger: true });

async function start() {
    try {
        // await app.register(prisma);

        // app.get()

        app.get("/ping", async () => ({ msg: "pong" }))

        const port = 3000;
        await app.listen({ port })
    } catch (err) {
        app.log.error(err)
        process.exit(1);
    }
}

start();