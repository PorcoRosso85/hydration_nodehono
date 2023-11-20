import { drizzle, BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

import * as schema from "./schema";

const sqlite = new Database("./sqlite3.db");
console.log(sqlite);
const sqliteDatabase: BetterSQLite3Database<typeof schema> = drizzle(sqlite, {
  schema,
});

export { sqliteDatabase };
