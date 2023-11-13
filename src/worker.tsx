import { Hono } from "hono";
import { html } from "hono/html";
import type { FC } from "hono/jsx";
import { Layout } from "./layout";
import { Sortable } from "./Sortable";
import { Render } from "./Render";
import basicRoute from "../packages/unxxxed/basic-route";
import { cartHonoApp } from "../packages/routes/src/cart/cart";
import Meta from "./components/Meta";

const Add: FC = () => {
  // お悩みポイント 2
  return html`<div x-data="{add: function(x, y) { return x + y }}">
    <button type="button" x-on:click="alert(add(1, 2))">Show</button>
  </div>`;
};

const app = new Hono();

app.use("*", async (c, next) => {
  c.setRenderer((content) => {
    return c.html(<Meta>{content}</Meta>);
  });
  await next();
});

app.get("/", async (c) => {
  return c.html(
    <Layout title="テスト">
      <Add />
      {/* <script src="https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"></script> */}
      {/* <Sortable> <Render /> </Sortable> */}
      <Render />
    </Layout>
  );
});

app.route("/basic", basicRoute);
app.route("/cart", cartHonoApp);
export default app;
