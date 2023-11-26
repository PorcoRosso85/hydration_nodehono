import { Hono } from "hono";
// import { Layout } from "./layout";
import { sortHonoApp } from "@hydration_hononode/sort";
import { paymentConfig, paymentHonoApp } from "@petittech/payment";
// import { databaseConfig, databaseHonoApp } from "@petittech/database";
import { aboutHonoApp } from "@petittech/about";
import { coreHonoApp } from "./routes";

const app = new Hono();
app.route("/", coreHonoApp);
app.route("/sort", sortHonoApp);
app.route(paymentConfig.routePrefix, paymentHonoApp);
// FIXME:
// app.route(databaseConfig.routePrefix, databaseHonoApp);
app.route("/about", aboutHonoApp);

export default app;
