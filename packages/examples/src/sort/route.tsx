import { Hono } from "hono";
import { SortExample } from "./SortExample";

const app = new Hono();
app.get("/", (c) => {
  return c.render(<SortExample />);
});

export { app as sortHonoApp };
