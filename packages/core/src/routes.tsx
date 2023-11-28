import { Hono } from 'hono'
import { html } from 'hono/html'
import type { FC } from 'hono/jsx'

import { Meta } from './components/Meta'

const Add: FC = () => {
  // お悩みポイント 2
  return html`<div x-data="{add: function(x, y) { return x + y }}">
    <button type="button" x-on:click="alert(add(1, 2))">Show</button>
  </div>`
}

const app = new Hono()

app
  .use('*', async (c, next) => {
    // TODO: 指定のルートにhydrationする実装追加
    c.setRenderer((content) => {
      return c.html(<Meta>{content}</Meta>)
    })
    await next()
  })

  .get('/', (c) => {
    return c.render(
      <>
        {/* <div hx-get="/about" hx-trigger="load, "></div> */}
        <div hx-get="/about/articles" hx-trigger="load, "></div>
      </>,
    )
  })

export const coreHonoApp = {
  endpoint: '/',
  app: app,
}
