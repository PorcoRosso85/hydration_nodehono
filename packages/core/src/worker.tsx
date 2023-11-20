import { Hono } from "hono";
import { html } from "hono/html";
import type { FC } from "hono/jsx";
import { Layout } from "./layout";
import { Meta } from "./components/Meta";
// import { sortHonoApp } from "@hydration_hononode/components";
import { sortHonoApp } from "@hydration_hononode/sort";
// import basicRoute from "../../unxxxed/basic-route";
// import { cartHonoApp } from "../../routes/src/cart/cart";
// import { chatHonoApp } from "../../routes/src/chat/chat";
// import { searchHonoApp } from "../../routes/src/search/search";
// import { formConfig } from "../../routes/src/form/config";
// import { formHonoApp } from "../../routes/src/form/form";
// import { todoConfig } from "../../components/src/todo/config";
// import { todoHonoApp } from "../../routes/src/todo/todo";
// import { gridConfig } from "../../unxxxed/grid/route/src/confit";
// import { gridHonoApp } from "../../unxxxed/grid/route/src/cells";
// import { threeConfig } from "../../routes/src/three/config";
// import { threeHonoApp } from "../../routes/src/three/three";
import { paymentConfig, paymentHonoApp } from "@petittech/payment";
import { databaseConfig, databaseHonoApp } from "@petittech/database";

const Add: FC = () => {
  // お悩みポイント 2
  return html`<div x-data="{add: function(x, y) { return x + y }}">
    <button type="button" x-on:click="alert(add(1, 2))">Show</button>
  </div>`;
};

const app = new Hono();

app
  .use("*", async (c, next) => {
    // TODO: 指定のルートにhydrationする実装追加
    c.setRenderer((content) => {
      return c.html(<Meta>{content}</Meta>);
    });
    await next();
  })

  .get("/", async (c) => {
    return c.html(
      <>
        <Layout title="テスト">
          <Add />
        </Layout>
      </>
    );
  })

  .post("/database/add");

// app.route("/test", testHonoApp);
app.route("/sort", sortHonoApp);
// app.route("/basic", basicRoute);
// app.route("/cart", cartHonoApp);
// app.route("/chat", chatHonoApp);
// app.route("/search", searchHonoApp);
// app.route(formConfig.routePrefix, formHonoApp);
// app.route(todoConfig.routePrefix, todoHonoApp);
// app.route(gridConfig.routePrefix, gridHonoApp);
// app.route(threeConfig.routePrefix, threeHonoApp);
app.route(paymentConfig.routePrefix, paymentHonoApp);
app.route(databaseConfig.routePrefix, databaseHonoApp);
export default app;
