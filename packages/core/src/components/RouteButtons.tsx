const RouteButtons = () => (
  <ul class="menu" hx-target="#main">
    <li>
      <button hx-get="/about">About</button>
    </li>
    <li>
      <button hx-get="/about/works">Works</button>
    </li>
    <li>
      <button hx-get="/about/articles">Articles</button>
    </li>
    <li>
      <button hx-get="/about/contact">Contact</button>
    </li>
  </ul>
)

export { RouteButtons }
