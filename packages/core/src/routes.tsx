import { Hono } from 'hono'
import { html } from 'hono/html'
import type { FC } from 'hono/jsx'

import { HtmxElement } from '@quantic/htmx'
import { Meta } from './components/Meta'

const Add: FC = () => {
  // お悩みポイント 2
  return html`<div x-data="{add: function(x, y) { return x + y }}">
    <button type="button" x-on:click="alert(add(1, 2))">Show</button>
  </div>`
}

const app = new Hono()

app
  // .use('*', async (c, next) => {
  //   // TODO: 指定のルートにhydrationする実装追加
  //   c.setRenderer((content) => {
  //     return c.html(
  //       <>
  //         <Meta>{content}</Meta>
  //       </>,
  //     )
  //   })
  //   await next()
  // })

  .get('/', async (c) => {
    const reqs = [{ url: '/about' }, { url: '/about/works' }, { url: '/about/contact' }]
    return await c.html(
      <>
        <Meta>
          {reqs.map((req, index) => (
            <div class="flex flex-col bg-white rounded shadow-lg p-12 mt-12">
              <HtmxElement
                elt="button"
                method="get"
                url={req.url}
                trigger="load, click"
                target={`#target_${index}`}
                // pushUrlHistory="true"
              >
                {req.url}
              </HtmxElement>
              <div id={`target_${index}`}>target</div>
            </div>
          ))}
        </Meta>
      </>,
    )
  })

export const coreHonoApp = {
  endpoint: '/',
  app: app,
}
