import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").unique().notNull(),
});

export const todos = sqliteTable("todos", {
  // id: integer("id").primaryKey({ autoIncrement: true }),
  content: text("content").notNull(),
  c2: text("c2").notNull(),
});
