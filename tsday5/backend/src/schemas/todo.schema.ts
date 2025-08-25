import type { FromSchema, JSONSchema } from "json-schema-to-ts";

export const TodoSchema = {
    type: "object",
    properties: {
        id: { type: "integer", minimum: 1 },
        title: { type: "string", minLength: 1 },
        done: { type: "boolean", default: false },
        createAt: { type: "string", format: "date-time" }
    }
} as const satisfies JSONSchema;
export type Todo = FromSchema<typeof TodoSchema>;


export const TodoCreateSchema = {
    type: "object",
    properties: {
        title: { type: "string", minLength: 1 }
    },
    required: ["title"],
    additionalProperties: false
} as const satisfies JSONSchema
export type TodoCreate = FromSchema<typeof TodoCreateSchema>;

export const TodoUpdateSchema = {
    type: "object",
    properties: {
        title: { type: "string", minLength: 1 },
        done: { type: "boolean" }
    },
    additionalProperties: false,
    anyOf: [{ required: ["title"] }, { required: ["done"] }]
} as const satisfies JSONSchema
export type TodoUpdate = FromSchema<typeof TodoUpdateSchema>;

export const ParamsIdSchema = {
    type: "object",
    properties: {
        id: { type: "integer", minimum: 1 },
    },
    required: ["id"],
    additionalProperties: false,
} as const satisfies JSONSchema;
export type ParamsId = FromSchema<typeof ParamsIdSchema>