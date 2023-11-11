import { html, raw } from "hono/html";
import type { FC } from "hono/jsx";

export const Layout: FC<{
  title: string;
  children: any;
}> = ({ title, children }) => {
  return html`<html>
    <head>
      <meta name="robots" content="noindex" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
      />
      ${import.meta.env.PROD
        ? raw('<script type="module" src="/static/clients/index.js"></script>')
        : raw('<script type="module" src="/src/clients/index.ts"></script>')}
      <title>${title}</title>
    </head>
    <body>
      ${children}
    </body>
  </html>`;
};
