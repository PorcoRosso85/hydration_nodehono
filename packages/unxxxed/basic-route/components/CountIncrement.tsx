export const BasicRouteCountIncrement = () => {
  return (
    <>
      <h3>Count increment/decrement example</h3>
      <form
        hx-post="/basic/count/increment"
        hx-target="#count"
        hx-swap="outerHTML"
      >
        <input type="hidden" name="increment" value="1" />
        <button name="submit">+1</button>
      </form>
      <form
        hx-post="/basic/count/decrement"
        hx-target="#count"
        hx-swap="outerHTML"
      >
        <input type="hidden" name="decrement" value="1" />
        <button name="submit">-1</button>
      </form>
    </>
  );
};
