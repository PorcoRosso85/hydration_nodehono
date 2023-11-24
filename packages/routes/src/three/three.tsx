import { Hono } from "hono";
import { ThreeDemension } from "../../../components/src/three/ThreeDemension";
import { Card } from "../../../components/src/three/Card";

const app = new Hono();

app.get("/", (c) => {
  return c.render(
    <>
      <Card />
      {/* <ThreeDemension /> */}
    </>
  );
});

export { app as threeHonoApp };
