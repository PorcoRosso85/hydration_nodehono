import { cartData } from "../../../unxxxed/basic-route/data/cartData";
import { addedItemToCartData } from "./data/addedItemToCartData";
import { itemData } from "./data/itemData";

let total = (cartData, id?) => {
  if (!id) {
    return cartData.reduce((sum, item) => {
      return (
        sum + Object.values(item).reduce((itemSum, value) => itemSum + value, 0)
      );
    }, 0);
  } else {
    return cartData.reduce((sum, item) => {
      return sum + (item[`${id}`] || 0);
    }, 0);
  }
};
console.log("total of key 1", total(addedItemToCartData, "1"));

export const CartItem = () => {
  return (
    <>
      Cart:
      {total(addedItemToCartData)}
    </>
  );
};

export const ShopItems = () => {
  const firstProduct = itemData[0];
  const keys = Object.keys(firstProduct);
  return (
    <>
      <table class="w-full">
        <thead>
          <tr>
            {keys.map((key) => (
              <th key={key}>{key}</th>
            ))}
            <th>+</th>
            <th>#</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          {itemData.map((item) => (
            <tr>
              {/* {console.log("each product", product)} */}
              {keys.map((key) => (
                <td>{item[key]}</td>
              ))}
              <td>
                <button
                  hx-post={`/cart/add/${item.id}`}
                  name="add"
                  value="1"
                  hx-swap="none"
                >
                  +
                </button>
              </td>
              {/* ここイベント読み込み追加 */}
              <td hx-get="" hx-trigger="once, ">
                {total(addedItemToCartData, item.id)}
              </td>
              <td>
                <button hx-post="/cart/add" name="add" value="1" hx-swap="none">
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
