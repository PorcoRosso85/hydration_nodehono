import { Hono } from 'hono'
import { html } from 'hono/html'
import type { FC } from 'hono/jsx'

import * as Htmx from './components/Htmx'
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
    await c.setRenderer((content) => {
      return c.html(<Meta>{content}</Meta>)
    })
    await next()
  })

  .get('/', async (c) => {
    const reqs = [{ url: '/about/articles' }]
    return await c.render(
      <>
        <Htmx.HtmxGet elt="button" reqs={reqs} trigger="load" />
      </>,
    )
  })

export const coreHonoApp = {
  endpoint: '/',
  app: app,
}
