import { Hono } from "hono";
import { CartItem, ShopItems } from "../../../components/src/cart/CartItem";
import { addedItemToCartData } from "../../../components/src/cart/data/addedItemToCartData";

const app = new Hono();

app
  .get("/", (c) => {
    return c.render(
      <>
        <CartItem />
        <ShopItems />
      </>
    );
  })
  .post("/add/:id", async (c) => {
    const parcedBody = await c.req.parseBody();
    const item = parcedBody["add"];
    // console.log("add from client: ", item);
    const id = await c.req.param("id");
    // item.idのキーで、add...に+1
    addedItemToCartData.push({ [id]: 1 });
    console.log("added item id and value: ", addedItemToCartData);

    c.header("HX-Trigger", "cartUpdate");
    return c.json("200");
  });

export { app as cartHonoApp };
