import { html, raw } from "hono/html";

export const Meta = (props) => {
  return (
    <html>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://unpkg.com/htmx.org@1.9.6"></script>
        <script src="https://unpkg.com/htmx.org/dist/ext/debug.js"></script>
        <Hydration />
      </head>
      <body>
        {/* <div class="grid grid-rows-6 h-screen bg-gray-100"> */}
        {/* <Header /> */}
        {/* <Nav /> */}
        {/* <main class="col-span-8 bg-gray-100">{props.children}</main> */}
        <main>{props.children}</main>
        {/* <Side /> */}
        {/* <Footer /> */}
        {/* </div> */}
      </body>
    </html>
  );
};

// TODO: html経由でmiddleware追加しているが、middlewareにtsつかえると思う
const Hydration = () => {
  return html`
    ${import.meta.env.PROD
      ? raw('<script type="module" src="/static/clients/index.js"></script>')
      : raw('<script type="module" src="/src/clients/index.ts"></script>')}
  `;
};

const Header = () => (
  <>
    <header class="row-span-1 w-screen bg-gray-300">Header...</header>
  </>
);
const Footer = () => (
  <>
    <footer class="row-span-1 w-screen bg-gray-300">Footer...</footer>
  </>
);
const Nav = () => (
  <>
    <nav class="col-span-1 bg-gray-400">Nav...</nav>
  </>
);
const Side = () => (
  <>
    <aside class="col-span-3 bg-gray-600">Side...</aside>
  </>
);

export default Meta;
