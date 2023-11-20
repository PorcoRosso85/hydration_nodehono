import { Hono } from "hono";
import {
  Checkout,
  SuccessCheckout,
} from "../../../components/src/payment/Payment";

const app = new Hono();

app
  .get("/", (c) => {
    return c.render(<Checkout />);
  })

  // send chosen plan to api server
  .post()

  // show success if api server apply chosen plan
  .get("/success", (c) => {
    return c.render(<SuccessCheckout />);
  });

export { app as paymentHonoApp };
