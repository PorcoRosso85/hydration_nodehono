import { Hono } from "hono";
import Meta from "../../../src/components/Meta";
import { BasicRouteIndex } from "./components";
import { BasicRouteCountTarget } from "./components/Count";
import { BasicRouteCountIncrement } from "./components/CountIncrement";
import { Products } from "./components/Products";
import { Tunnel } from "./components/Tunnel";

const basicRoute = new Hono();
basicRoute
  .get("/", (c) => {
    return c.html(
      <Meta>
        <BasicRouteIndex />
      </Meta>
    );
  })
  .get("/count", (c) => {
    return c.html(
      <>
        <BasicRouteCountIncrement />
        <BasicRouteCountTarget />
      </>
    );
  })
  .post("/count/increment", async (c) => {
    const input = await c.req.parseBody();
    const increment: number = Number(input["increment"]);
    if (isNaN(increment)) {
      return c.html(<>Error</>);
    }
    console.log("increment: ", increment);
    return c.html(<BasicRouteCountTarget number={increment} />);
  })
  .post("/count/decrement", async (c) => {
    const input = await c.req.parseBody();
    const decrement: number = Number(input["decrement"]);
    if (isNaN(decrement)) {
      return c.html(<>Error</>);
    }
    console.log("decrement: ", -decrement);
    return c.html(<BasicRouteCountTarget number={-decrement} />);
  })
  .get("/cart", (c) => {
    return c.html(<Products />);
  })
  .post("/cart/add", async (c) => {
    return c.text("Added to cart");
  })
  .get("/tunnel", (c) => {
    return c.render(
      <>
        <Tunnel text="hi, tunnel" />
      </>
    );
  });

export default basicRoute;
