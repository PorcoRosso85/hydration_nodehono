import { productData } from "../data/productData";

export const Products = () => {
  const firstProduct = productData[0];
  const keys = Object.keys(firstProduct);
  //   console.log(keys);
  // console.log(<Sort />);
  return (
    <>
      <script>
        document.body.addEventListener("myevent", function(evt){})
      </script>
      <table class="w-full">
        <h3>Product and Cart example</h3>
        <thead>
          <tr>
            {keys.map((key) => (
              <th key={key}>{key}</th>
            ))}
            <th key="cart"></th>
          </tr>
        </thead>
        <tbody>
          {productData.map((product) => (
            <tr>
              {/* {console.log("each product", product)} */}
              {keys.map((key) => (
                <td>{product[key]}</td>
              ))}
              <td>
                <button hx-post="/basic/cart/add">C</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const Sort = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
      var nestedSortables = document.querySelectorAll(".child");
      ${script}
      `,
      }}
    ></script>
  );
};

const script = () => {
  var one = "1";
};
