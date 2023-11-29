import type { Config } from "drizzle-kit";

export default {
  /**
   * TODO: 各プロジェクトがこのリポジトリをインポートすれば、
   * パッケージがローカルにインストールされ、
   * パッケージ内にマイグレーションされる
   *
   */
  schema: "./src/schema.ts",
  out: "./migrations",
  driver: "better-sqlite",
  dbCredentials: {
    url: "./sqlite3.db",
  },
  verbose: true,
  strict: true,
} satisfies Config;
