import { Hono } from "hono";
import { ThreeDemension } from "../../../components/src/three/ThreeDemension";

const app = new Hono();

app.get("/", (c) => {
  return c.render(<ThreeDemension />);
});

export { app as threeHonoApp };
