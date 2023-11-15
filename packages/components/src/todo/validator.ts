import { createInsertSchema } from "drizzle-zod";

import * as schema from "../../../database/src/schema";

export const insertTodoSchema = createInsertSchema(schema.todos);
