import { html, raw } from 'hono/html'
import { Header } from './Header'

export const Meta = (props) => {
  const style = `
.reset-style, .reset-style * {
  all: revert;
}
  `
  return (
    <html>
      <head>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        {/* $ {import.meta.env.PROD
          ? raw(
              '<script type="module" src="/static/clients/index.js"></script>'
            )
          : raw('<script type="module" src="/src/clients/index.ts"></script>')} */}
        {/* <title>${title}</title> */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://unpkg.com/htmx.org@1.9.6"></script>
        <script src="https://unpkg.com/htmx.org/dist/ext/debug.js"></script>
        <script src="//unpkg.com/alpinejs" defer></script>

        <Hydration />
      </head>
      <body class="font-mono">
        {/* <style>{style}</style> */}
        <Header />
        {/* <Left /> */}
        <main id="main">{props.children}</main>
        {/* <Right /> */}
        {/* <Footer /> */}
      </body>
    </html>
  )
}

// TODO: html経由でmiddleware追加しているが、middlewareにtsつかえると思う
const Hydration = () => {
  return html`
    ${
      import.meta.env.PROD
        ? raw('<script type="module" src="/static/client.js"></script>')
        : raw('<script type="module" src="/src/clients/index.ts"></script>')
    }
  `
}

const Left = () => (
  <>
    <aside>
      <div class="mx-auto max-w-[40rem] lg:mx-0 lg:max-w-none lg:flex-none">
        <ul
          role="list"
          class="space-y-10 text-sm leading-6 text-slate-700 lg:sticky lg:top-0 lg:-mt-16 lg:h-screen lg:w-72 lg:overflow-y-auto lg:py-16 lg:pr-8 lg:[mask-image:linear-gradient(to_bottom,transparent,white_4rem,white)]"
        >
          <li>
            <a href="#getting-set-up" class="font-semibold text-slate-900">
              Getting set up
            </a>
            <ul role="list" class="mt-4 space-y-2 border-l border-slate-200 pl-6">
              <li>
                <a href="#requirements">Requirements</a>
              </li>
              <li>
                <a href="#optional-add-the-inter-font-family">
                  Optional: Add the Inter font family
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#using-react" class="font-semibold text-slate-900">
              Using React
            </a>
            <ul role="list" class="mt-4 space-y-2 border-l border-slate-200 pl-6">
              <li>
                <a href="#react-installing-dependencies">Installing dependencies</a>
              </li>
              <li>
                <a href="#react-creating-components">Creating components</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#using-vue" class="font-semibold text-slate-900">
              Using Vue
            </a>
            <ul role="list" class="mt-4 space-y-2 border-l border-slate-200 pl-6">
              <li>
                <a href="#vue-installing-dependencies">Installing dependencies</a>
              </li>
              <li>
                <a href="#vue-creating-components">Creating components</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#using-html-and-your-own-js" class="font-semibold text-slate-900">
              Using HTML and your own JS
            </a>
            <ul role="list" class="mt-4 space-y-2 border-l border-slate-200 pl-6">
              <li>
                <a href="#html-accessibility">Accessibility considerations</a>
              </li>
              <li>
                <a href="#html-dynamic-classes">Dynamic classes</a>
              </li>
              <li>
                <a href="#html-transitions">Transitions</a>
              </li>
              <li>
                <a href="#html-creating-partials-components">Creating partials/components</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#resources-and-assets" class="font-semibold text-slate-900">
              Resources &amp; assets
            </a>
            <ul role="list" class="mt-4 space-y-2 border-l border-slate-200 pl-6">
              <li>
                <a href="#resources-icons">Icons</a>
              </li>
              <li>
                <a href="#resources-images">Images</a>
              </li>
              <li>
                <a href="#resources-illustrations">Illustrations</a>
              </li>
              <li>
                <a href="#figma-assets">Figma assets</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  </>
)
const Right = () => (
  <>
    <aside class="col-span-3 bg-gray-600">Right.</aside>
  </>
)

const Footer = () => {
  const style = `
footer {
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
  width: 100%;
  z-index: 3;
}
  
  `
  return (
    <>
      <style>{style}</style>
      <footer>
        <h2>contact</h2>
      </footer>
    </>
  )
}

export default Meta
