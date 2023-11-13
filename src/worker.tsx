import { Hono } from "hono";
import { html } from "hono/html";
import type { FC } from "hono/jsx";
import { Layout } from "./layout";
import { Meta } from "./components/Meta";
import basicRoute from "../packages/unxxxed/basic-route";
import { cartHonoApp } from "../packages/routes/src/cart/cart";
import { sortHonoApp } from "../packages/routes/src/sort/sort";
import { SortExample } from "../packages/components/src/sort/SortExample";

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
    <>
      <Layout title="テスト">
        <Add />
      </Layout>
    </>
  );
});

app.route("/basic", basicRoute);
app.route("/cart", cartHonoApp);
app.route("/sort", sortHonoApp);
export default app;
