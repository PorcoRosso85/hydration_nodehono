import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").unique().notNull(),
});

export const todos = sqliteTable("todos", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  user: text("user").notNull(),
  content: text("content").notNull(),
});

export const email = sqliteTable("email", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull(),
});
