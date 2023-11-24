import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

import * as schema from "../../../database/src/schema";

export const apiInsertTodoSchema = createInsertSchema(schema.todos, {
  id: z.string().min(1),
  content: (schema) => schema.content.min(3).max(255),
});
export const insertEmailSchema = createInsertSchema(schema.email, {
  email: (schema) => schema.email.email(),
});
