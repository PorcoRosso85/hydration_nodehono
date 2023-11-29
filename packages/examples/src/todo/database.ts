import {
  drizzle,
  type BetterSQLite3Database,
} from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

import * as schema from "../../../database/src/schema";

// const sqlite = new Database("sqlite3.db");
// const db: BetterSQLite3Database<typeof schema> = drizzle(sqlite, { schema });

export const todoItemsDataSample = [
  {
    id: "00001",
    user: "001",
    content: "buy egg",
  },
];

// await db.insert(schema.todos).values(todoItemsDataSample);
