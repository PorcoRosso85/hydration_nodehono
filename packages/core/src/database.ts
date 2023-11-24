import {
  sqliteDatabase as db,
  databaseSchema as schema,
} from "@petittech/database";

console.debug("db: ", db);
console.debug("insert data to ./sqlite3 in database package");
await db.insert(schema.users).values({ name: "Por" });

console.debug("select data from ./sqlite3 in database package");
const result = await db.select().from(schema.users);
console.debug("result: ", result);
