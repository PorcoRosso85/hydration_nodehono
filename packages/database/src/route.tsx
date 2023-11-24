import { Hono } from "hono";
import { validator } from "hono/validator";
import { TestQuery } from "./TestQuery";
import { insertEmailSchema } from "./validator";

const app = new Hono();

app
  .get("/", (c) => {
    return c.render(
      <>
        <TestQuery />
      </>
    );
  })
  .post(
    "/add",
    validator("form", (v, c) => {
      const parsed = insertEmailSchema.safeParse(v);
      const errorMessage = "error";
      return parsed.success ? parsed.data : c.text(errorMessage, 401);
    }),
    async (c) => {
      const parseBody = await c.req.valid("form");
      const email = parseBody["email"];
      console.log(email);

      return c.render(<>added successful</>);
    }
  );

export { app as databaseHonoApp };
