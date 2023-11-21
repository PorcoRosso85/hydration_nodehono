import { html, raw } from "hono/html";

export const Meta = (props) => {
  const style = `
body {
  margin: 0;
  font-family: Helvetica, sans-serif;
  background-color: #f4f4f4;
}

a {
  color: #000;
}

  `;
  return (
    <html>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://unpkg.com/htmx.org@1.9.6"></script>
        <script src="https://unpkg.com/htmx.org/dist/ext/debug.js"></script>
        <Hydration />
      </head>
      <body>
        <style>{style}</style>
        <Header />
        <div style={"padding-top: 80px"}></div>
        {/* <Left /> */}
        <main>{props.children}</main>
        {/* <Right /> */}
        <Footer />
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

const Header = () => {
  const style = `
/* header */

header {
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
  position: fixed;
  width: 100%;
  z-index: 3;
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: #fff;
}

.header li a {
  display: block;
  padding: 20px 20px;
  border-right: 1px solid #f4f4f4;
  text-decoration: none;
}

.header li a:hover,
.header .menu-btn:hover {
  background-color: #f4f4f4;
}

.header .logo {
  display: block;
  float: left;
  font-size: 2em;
  padding: 10px 20px;
  text-decoration: none;
}

/* menu */

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height .2s ease-out;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: #333;
  display: block;
  height: 2px;
  position: relative;
  transition: background .2s ease-out;
  width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #333;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 240px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

/* 48em = 768px */

@media (min-width: 64em) {
  .header li {
    float: left;
  }
  .header li a {
    padding: 20px 30px;
  }
  .header .menu {
    clear: none;
    float: right;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }
}


`;
  return (
    <>
      <header class="header">
        <style>{style}</style>
        <a href="" class="logo">
          Tetsuya Takasawa
        </a>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        <ul class="menu">
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          {/* <li>
            <a href="#careers">Careers</a>
          </li> */}
          <li>
            <a href="/about/contact">Contact</a>
          </li>
        </ul>
      </header>
    </>
  );
};

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
            <ul
              role="list"
              class="mt-4 space-y-2 border-l border-slate-200 pl-6"
            >
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
            <ul
              role="list"
              class="mt-4 space-y-2 border-l border-slate-200 pl-6"
            >
              <li>
                <a href="#react-installing-dependencies">
                  Installing dependencies
                </a>
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
            <ul
              role="list"
              class="mt-4 space-y-2 border-l border-slate-200 pl-6"
            >
              <li>
                <a href="#vue-installing-dependencies">
                  Installing dependencies
                </a>
              </li>
              <li>
                <a href="#vue-creating-components">Creating components</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#using-html-and-your-own-js"
              class="font-semibold text-slate-900"
            >
              Using HTML and your own JS
            </a>
            <ul
              role="list"
              class="mt-4 space-y-2 border-l border-slate-200 pl-6"
            >
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
                <a href="#html-creating-partials-components">
                  Creating partials/components
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#resources-and-assets"
              class="font-semibold text-slate-900"
            >
              Resources &amp; assets
            </a>
            <ul
              role="list"
              class="mt-4 space-y-2 border-l border-slate-200 pl-6"
            >
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
);
const Right = () => (
  <>
    <aside class="col-span-3 bg-gray-600">Right.</aside>
  </>
);

const Footer = () => {
  const style = `
footer {
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
  width: 100%;
  z-index: 3;
}
  
  `;
  return (
    <>
      <style>{style}</style>
      <footer>
        <h2>contact</h2>
      </footer>
    </>
  );
};

export default Meta;
