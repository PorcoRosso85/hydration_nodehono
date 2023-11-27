import { Hono } from "hono";
import { Profile } from "./Profile";
import { Contact } from "./Contact";
import { articlesHonoApp } from "@petittech/articles";
import { worksHonoApp } from "@petittech/works"

const app = new Hono();

app
  .get("/", (c) => {
    return c.html(<Profile />);
  })

  // .get("/list", (c) => {
  //   return c.render(<PostList />);
  // })

  // .get("/md", (c) => {
  //   return c.html(marked(md));
  // });

  .get("/contact", (c) => {
    return c.html(<Contact />);
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

app.route("/articles", articlesHonoApp);
app.route("/works", worksHonoApp)
export { app as aboutHonoApp };
