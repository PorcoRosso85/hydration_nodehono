import { Hono } from "hono";
import { Cells } from "../../components/src/Cells";

const app = new Hono();

app.get("/", (c) => {
  return c.render(<Cells />);
});

export { app as gridHonoApp };
