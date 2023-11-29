import { addedItemToCartData } from "./data/addedItemToCartData";
import { itemData } from "./data/itemData";

export const CartItem = () => {
  return (
    <div
      hx-get={`/cart/add/_/amount`}
      hx-trigger="load, cartUpdate from:body"
      hx-target={`.amount-_`}
      hx-swap="outerHTML"
      hx-ext="debug"
    >
      <span class={`amount-_`}>0</span>
    </div>
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
              {/* TODO: ここイベント読み込み追加 */}
              <td
                hx-get={`/cart/add/${item.id}/amount`}
                hx-trigger="load, cartUpdate from:body"
                // hx-trigger="load"
                hx-target={`.amount-${item.id}`}
                // hx-swap="outerHTML"
              >
                <span class={`amount-${item.id}`}>0</span>
                {/* <ItemAmmountInCart
                  cartData={addedItemToCartData}
                  id={item.id}
                /> */}
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

export const ItemAmmountInCart = (props) => {
  let total = (cartData, id?) => {
    return id
      ? cartData.reduce((sum, item) => sum + (item[id] || 0), 0)
      : cartData.reduce(
          (sum, item) =>
            sum +
            Object.values(item).reduce((itemSum, value) => itemSum + value, 0),
          0
        );
  };

  let amount = total(props.cartData, props.id);
  return <>{amount === 0 ? <p>0</p> : <p>{amount}</p>}</>;
};
