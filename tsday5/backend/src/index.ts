import Fastify from "fastify";
import cors from "@fastify/cors";
import fp from "fastify-plugin";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";

const app = Fastify();

// await app.register(cors, {
//     origin: true,
//     methods: "*",
//     allowedHeaders: "*"
// })

await app.register(swagger, {
    openapi: {
        info: { title: "Workshop API", version: "0.0.1" },
        servers: [{ url: "http://localhost:3000" }]
    }
});

await app.register(swaggerUI, { routePrefix: "/docs" });

app.get("/ping", async (req) => {
    console.log("route body:", req.body);
    return { pong: "pong pong", id: req.id }
});
app.post("/echo", async (req) => { return { body: req.body, id: req.id } });

app.get("/users/:id", async (req, reply) => {
    const { id } = req.params as { id: string };
    const { search } = (req.query) as { search?: string };
    return { id, search };
    // return reply.code(201).send({ id, search });
});

/////////

type CreateBody = { title: string };
type CreateRes = { id: number, title: string };


app.post<{ Body: CreateBody; Reply: CreateRes }>("/todos", async (req, reply) => {
    const todo = { id: 1, title: req.body.title };
    return reply.code(201).send(todo);
});


////////

app.get("/boom", async () => { throw new Error("oops"); });

app.setErrorHandler((err, req, reply) => reply.status(500).send({ error: err.message }));


const authPlugin = fp(async (app) => {
    app.addHook("onRequest", async (req) => {
        req.id = "55";
        // console.log("onRequest body");
    });
});

app.register(authPlugin);


app.listen({ port: 3000 });