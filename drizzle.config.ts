import type { Config } from "drizzle-kit";

export default {
  schema: "./packages/database/src/schema.ts",
  out: "./packages/database/migrations",
  driver: "better-sqlite",
  dbCredentials: {
    url: "./sqlite3.db",
  },
  verbose: true,
  strict: true,
} satisfies Config;
