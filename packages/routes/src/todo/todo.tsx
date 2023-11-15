import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import {
  EmailAdd,
  TodoAdd,
  TodoList,
  todoItemsData,
} from "../../../components/src/todo/todo";
import {
  insertEmailSchema,
  insertTodoSchema,
} from "../../../components/src/todo/validator";

const app = new Hono();

app
  .get("/", (c) => {
    return c.render(
      <>
        <TodoAdd />
        <TodoList todoItemsData={todoItemsData} />
        <hr />
        <EmailAdd />
      </>
    );
  })
  .post("/add", zValidator("form", insertTodoSchema), async (c) => {
    const parseBody = await c.req.parseBody();
    const content = parseBody["content"];
    const c2 = parseBody["c2"];
    console.log(content, c2);
    return c.html(<></>);
  })
  .post("/add/email", zValidator("form", insertEmailSchema), async (c) => {
    const parseBody = await c.req.parseBody();
    const email = parseBody["email"];
    console.log(email);
    return c.html(<></>);
  });

export { app as todoHonoApp };
