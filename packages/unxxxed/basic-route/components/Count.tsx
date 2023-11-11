let count: number = 0;

export const BasicRouteCountTarget = (props) => {
  const number: number = props.number;
  count += number;
  console.log(count);
  return <div id="count">count: {count}</div>;
};
