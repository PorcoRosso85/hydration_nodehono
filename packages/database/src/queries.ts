import connect, { sql } from "@databases/sqlite";

export const getTweet = (UserID) =>
  sql`SELECT TweetID, Content, PostDate FROM Tweets WHERE UserID = ${UserID}`;

export const countLikes = (TweetID) =>
  sql`SELECT COUNT(LikeID) as LikesCount FROM Likes WHERE TweetID = ${TweetID}`;
