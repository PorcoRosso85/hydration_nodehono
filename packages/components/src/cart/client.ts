// viteで、clientsideへハイドレーションしてもらう

// cart要素がlistenするためのリスナ
export const cartUpdate = document.body.addEventListener(
  "cartUpdate",
  (event) => {
    console.log("Got cartUpdate event from HX-Trigger header");
  }
);
