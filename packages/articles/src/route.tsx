import { Hono } from "hono";
import { Articles } from "./Articles";
import { articles } from "./contents/articls";

const app = new Hono();

app.get("/", (c) => {
  return c.html(<Articles articles={articles} />);
});

export { app as articlesHonoApp };
