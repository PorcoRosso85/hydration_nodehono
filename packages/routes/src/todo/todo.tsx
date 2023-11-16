import { Hono } from "hono";
import { validator } from "hono/validator";
import { logger } from "hono/logger";
import { zValidator } from "@hono/zod-validator";

import { EmailAdd, TodoAdd, TodoList } from "../../../components/src/todo/todo";
import { todoItemsDataSample } from "../../../components/src/todo/database";
import {
  apiInsertTodoSchema,
  insertEmailSchema,
} from "../../../components/src/todo/validator";
import { customLogger, genId, genUser } from "./middleware";

const app = new Hono();

app
  .use("*", logger(customLogger))
  // custom middleware
  // .use("*", async (c, next) => {
  //   await next()
  // })
  .get("/", (c) => {
    return c.render(
      <>
        <EmailAdd />
        <hr />
        <TodoAdd />
        <TodoList todoItemsData={todoItemsDataSample} />
      </>
    );
  })
  .use(
    "/add/*",

    async (c, next) => {
      await next();
    }
  )
  .post(
    "/add",
    validator("form", (v, c) => {
      const parsed = apiInsertTodoSchema.safeParse(v);
      return parsed.success ? parsed.data : c.text("invalid", 401);
    }),
    async (c) => {
      const parseBody = await c.req.parseBody();
      const id = parseBody["id"];
      const content = parseBody["content"];
      const user = parseBody["user"];
      customLogger(
        "Todo added",
        `id: ${id}`,
        `content: ${content}`,
        `user: ${user}`
      );
      // const id = crypto.randomUUID();
      // db追加

      // db追加完了を確認

      // swap用に追加idのitemを返す
      return c.html(<></>);
    }
  )
  .post("/add/email", zValidator("form", insertEmailSchema), async (c) => {
    const parseBody = await c.req.parseBody();
    const email = parseBody["email"];
    console.log(email);
    return c.html(<></>);
  });

export { app as todoHonoApp };
