# Backend (Fastify + Prisma + Zod)

## Quick Start
```bash
npm i
npm run prisma:generate
npm run prisma:migrate
npm run db:seed
npm run dev
# API at http://localhost:3000
```

- Default DB: SQLite (`.env` sets `DATABASE_URL="file:./dev.db"`)
- Change to MySQL: update `prisma/schema.prisma` provider and `.env`, then run `npm run prisma:migrate`

## Routes
- `GET /ping`
- `GET /todos`
- `POST /todos` { title }
- `PATCH /todos/:id` { title?, done? }
- `DELETE /todos/:id`
