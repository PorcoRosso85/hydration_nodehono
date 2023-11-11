export const BasicRouteIndex = () => {
  // componentsの各ルートと各コンポーネントを自動的にボタンにする
  return (
    <>
      {/* <div hx-get="/basic"></div> */}
      <hr />
      <br />
      <div hx-get="/basic/count" hx-trigger="load"></div>
      <hr />
      <br />
      <div hx-get="/basic/cart" hx-trigger="load"></div>
      <hr />
      <br />
    </>
  );
};
