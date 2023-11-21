import { Hono } from "hono";
import { marked } from "marked";
import { Profile } from "./Profile";
import md from "./sample.md";

import { articles } from "./Profile";

const app = new Hono();

app
  .get("/", (c) => {
    return c.render(<Profile articles={articles} />);
  })

  // .get("/list", (c) => {
  //   return c.render(<PostList />);
  // })

  // .get("/md", (c) => {
  //   return c.html(marked(md));
  // });

  .get("/articles", (c) => {
    return c.render(<Profile articles={articles} />);
  });

export { app as aboutHonoApp };
