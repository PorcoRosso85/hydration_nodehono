import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").unique().notNull(),
});

export const todos = sqliteTable("todos", {
  id: integer("id").primaryKey(),
  user: text("user").notNull(),
  content: text("content").notNull(),
});

export const email = sqliteTable("email", {
  email: text("email").notNull(),
});
