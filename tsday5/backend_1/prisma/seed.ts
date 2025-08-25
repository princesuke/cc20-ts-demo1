// import { PrismaClient } from "../src/generated/prisma/client.js"
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    const count = await prisma.todo.count();
    if (count == 0) {
        await prisma.todo.createMany({
            data: [
                { title: "Learn Javascript", done: true },
                { title: "Learn Typescript", done: false },
                { title: "Learn flutter", done: false }
            ]
        })
    } else {
        console.log('Todos already present, skipping seed.');
    }
}

main().finally(async () => {
    await prisma.$disconnect();
})