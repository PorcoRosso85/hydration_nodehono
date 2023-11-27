const RouteButtons = function () {
  return (
    <ul class="menu" hx-target="#main">
      <li>
        <a hx-get="/about">About</a>
      </li>
      <li>
        <a hx-get="/about/works">Works</a>
      </li>
      <li>
        <a hx-get="/about/articles">Articles</a>
      </li>
      <li>
        <a hx-get="/about/contact">Contact</a>
      </li>
    </ul>
  );
};

export { RouteButtons };
