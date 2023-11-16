import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

import * as schema from "../../../database/src/schema";

export const apiInsertTodoSchema = createInsertSchema(schema.todos, {
  id: z.string(),
});
export const insertEmailSchema = createInsertSchema(schema.email, {
  email: (schema) => schema.email.email(),
});
