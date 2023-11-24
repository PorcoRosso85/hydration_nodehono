// import { drizzle, BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
// import Database from "better-sqlite3";

// import * as schema from "./schema";

// const sqlite = new Database("./sqlite3.db");
// console.log(sqlite);
// const sqliteDatabase: BetterSQLite3Database<typeof schema> = drizzle(sqlite, {
//   schema,
// });

// export { sqliteDatabase };

import connect from "@databases/sqlite";
import { countLikes, getTweet } from "./queries";

// check type of result
export const sql = async <T = unknown>(db, query): Promise<T> => {
  try {
    const results = await db.query(query);
    console.debug(results);
    return results as T;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const db = connect("../../ln_test.db");

sql(db, getTweet(1)).catch((err) => {
  console.error(err);
  process.exit(1);
});

sql(db, countLikes(1)).catch((err) => {
  console.error(err);
  process.exit(1);
});

db.dispose();
