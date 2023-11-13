import { html, raw } from "hono/html";

export const Meta = (props) => {
  const style = `
      // .container { display: grid; grid-template-columns: 10% 90%; } 
  `;
  return (
    <html>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <style>{style}</style>
        <script src="https://unpkg.com/htmx.org@1.9.6"></script>
        <Hydration />
      </head>
      <body>
        <Body
          header={<Header />}
          nav={<Nav />}
          aside={<Side />}
          footer={<Footer />}
        >
          {props.children}
        </Body>
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

const Body = (props) => {
  return (
    <>
      <div class="grid grid-rows-6 h-screen bg-gray-100">
        <header class="row-span-1 w-screen bg-gray-300">{props.header}</header>

        <div class="row-span-4 w-screen">
          <div class="grid grid-cols-12 gap-1">
            <nav class="col-span-1 bg-gray-400">{props.nav}</nav>

            <main class="col-span-8 bg-gray-100">{props.children}</main>

            <aside class="col-span-3 bg-gray-600">{props.aside}</aside>
          </div>
        </div>

        <footer class="row-span-1 w-screen bg-gray-300">{props.footer}</footer>
      </div>
    </>
  );
};

const Header = () => <>Header...</>;
const Footer = () => <>Footer...</>;
const Nav = () => <>Nav...</>;
const Side = () => <>Side...</>;

const ScriptElt = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
        const menuButton = document.getElementById('menuButton');
        const sidebar = document.getElementById('sidebar');
        
        menuButton.addEventListener('click', () => {
          sidebar.classList.toggle('hidden');
        }); 
      `,
    }}
  ></script>
);

export default Meta;
