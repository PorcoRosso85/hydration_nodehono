import connect, { sql } from "@databases/sqlite";

const db = connect();

await db.query(sql` CREATE TABLE Users (
    UserID INTEGER PRIMARY KEY AUTOINCREMENT,
    UserName TEXT NOT NULL,
    Password TEXT NOT NULL,
    Email TEXT,
    ProfileText TEXT,
    ProfilePicture TEXT);
  `);

await db
  .query(
    sql`SELECT sql FROM sqlite_master WHERE type='table' AND name='Users'; `
  )
  .then((results) => console.debug(results));

await db.query(sql`
    INSERT INTO Users (UserName, Password, Email, ProfileText, ProfilePicture)
    VALUES ('user1', 'password1', 'user1@example.com', 'Hello, I am user1', 'user1pic.jpg')
  `);

await db
  .query(sql` SELECT * FROM Users`)
  .then((results) => console.debug(results));
