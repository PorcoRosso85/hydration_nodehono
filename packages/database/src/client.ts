// import { drizzle, BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
// import Database from "better-sqlite3";

// import * as schema from "./schema";

// const sqlite = new Database("./sqlite3.db");
// console.log(sqlite);
// const sqliteDatabase: BetterSQLite3Database<typeof schema> = drizzle(sqlite, {
//   schema,
// });

// export { sqliteDatabase };

import Database from 'better-sqlite3'

// check type of result
export const execute = async <T = unknown>(db, query): Promise<T> => {
  try {
    const results = await db.prepare(query)
    console.debug(results)
    return results as T
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const db = (path: string) => Database(path)

// execute(db, getTweet(1)).catch((err) => {
//   console.error(err);
//   process.exit(1);
// });

// execute(db, countLikes(1)).catch((err) => {
//   console.error(err);
//   process.exit(1);
// });

// db.dispose();
