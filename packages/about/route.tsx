import { Hono } from "hono";
import { marked } from "marked";
import { Contact, Profile } from "./Profile";
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

  .get("/contact", (c) => {
    return c.render(<Contact />);
  })
  .post("/contact", async (c) => {
    const parsed = await c.req.parseBody();
    const email = parsed["email"];
    const firstName = parsed["first-name"];
    const lastName = parsed["last-name"];
    const message = parsed["message"];
    console.debug(email, firstName, lastName, message);
    return c.text("");
  });

export { app as aboutHonoApp };
