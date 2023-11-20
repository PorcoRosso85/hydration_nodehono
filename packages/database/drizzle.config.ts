import type { Config } from "drizzle-kit";

export default {
  // TODO: インポートすれば、パッケージがローカルにインストールされ、パッケージ内にマイグレーションされる
  schema: "./src/schema.ts",
  // schema: "@petittech/database/src/schema.ts",
  out: "./migrations",
  // out: "@petittech/database/migrations",
  driver: "better-sqlite",
  dbCredentials: {
    url: "./sqlite3.db",
  },
  verbose: true,
  strict: true,
} satisfies Config;
