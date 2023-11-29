const RouteButtons = () => (
  <ul class="menu" hx-target="#main">
    <li class="pr-4">
      <button hx-get="/about">About</button>
    </li>
    <li class="pr-4">
      <button hx-get="/about/works">Works</button>
    </li>
    <li class="pr-4">
      <button hx-get="/about/articles">Articles</button>
    </li>
    <li class="pr-4">
      <button hx-get="/about/contact">Contact</button>
    </li>
  </ul>
)

export { RouteButtons }
