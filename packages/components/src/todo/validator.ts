import { createInsertSchema } from "drizzle-zod";

import * as schema from "../../../database/src/schema";

export const insertTodoSchema = createInsertSchema(schema.todos);
export const insertEmailSchema = createInsertSchema(schema.email, {
  email: (schema) => schema.email.email(),
});
