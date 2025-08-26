import Fastify from "fastify";
import prisma from "./plugins/prisma";
import routes from "./routes/todos.routes";
import swagger from "@fastify/swagger";
import swaggetUI from "@fastify/swagger-ui";
import cors from "@fastify/cors";

const app = Fastify({ logger: false });

async function start() {
  try {

    await app.register(swagger, {
      openapi: {
        info: { title: "Todo Workshop API", version: "0.0.1" },
        servers: [{ url: "http://localhost:3000" }]
      }
    })
    await app.register(swaggetUI, { routePrefix: "/docs" });

    await app.register(cors, {
      origin: true,
      methods: "*"
    });


    await app.register(prisma);
    await app.register(routes);


    const port = Number(process.env.PORT || 3000);
    await app.listen({ port });
    app.log.info(`API ready on http://localhost:${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

start();
