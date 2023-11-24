import { Hono } from "hono";
import { Works } from "./Works";

import { works } from "./Works";
import { DashboardApp } from "./dashboard/App";
import { ProductsGrid } from "./dashboard/ProductsGrid";
import { Payment } from "./dashboard/Payment";
import { NavAndIcon } from "./dashboard/NavAndIcon";
import { Login } from "./dashboard/Login";
import { Price } from "./dashboard/Price";
import { DashBoard } from "./dashboard/DashBoard";
import { Chat } from "./dashboard/Chat";
import { Table } from "./dashboard/Table";

const app = new Hono();

app
  .get("/", (c) => {
    return c.render(
      <>
        <Works works={works} />
      </>
    );
  })
  .get("/dashboard", (c) => {
    return c.render(
      <>
        <DashboardApp />
      </>
    );
  })
  .get("/login", (c) => {
    return c.html(<Login />);
  })
  .get("/nav", (c) => {
    return c.html(<NavAndIcon />);
  })
  .get("/dashboardsample", (c) => {
    return c.html(<DashBoard />);
  })
  .get("/payment", (c) => {
    return c.html(<Payment />);
  })
  .get("/products", (c) => {
    return c.html(<ProductsGrid />);
  })
  .get("/price", (c) => {
    return c.html(<Price />);
  })
  .get("/chat", (c) => {
    return c.html(<Chat />);
  })
  .get("/table", (c) => {
    return c.html(<Table />);
  });

export { app as worksHonoApp };

const portfolios = [{}];
