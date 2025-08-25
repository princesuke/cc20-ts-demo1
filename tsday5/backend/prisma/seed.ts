import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const count = await prisma.todo.count();
  if (count === 0) {
    await prisma.todo.createMany({
      data: [
        { title: "Learn TypeScript", done: false },
        { title: "Build Fastify API", done: false },
        { title: "Hook React Frontend", done: false },
      ]
    });
    console.log("Seeded example todos.");
  } else {
    console.log("Todos already present, skipping seed.");
  }
}

main().finally(async () => {
  await prisma.$disconnect();
});
