import { Hono } from 'hono'
import { html } from 'hono/html'
import type { FC } from 'hono/jsx'

import { aboutHonoApp } from '@petittech/about'
import { modalHonoApp } from '@petittech/works/src/modal/route'
import { HtmxElement } from '@quantic/htmx'
import { Meta } from './components/Meta'

const Add: FC = () => {
  // お悩みポイント 2
  return html`<div x-data="{add: function(x, y) { return x + y }}">
    <button type="button" x-on:click="alert(add(1, 2))">Show</button>
  </div>`
}

const app = new Hono()
const endpoint = '/'
const endpoints = {
  root: endpoint,
}

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

  .get(endpoints.root, async (c) => {
    const urls = [aboutHonoApp.endpoint, modalHonoApp.endpoint]
    return await c.html(
      <>
        <Meta>
          {urls.map((url, index) => (
            <div class="flex flex-col bg-white rounded shadow-lg p-12 mt-12">
              <HtmxElement
                elt="button"
                method="get"
                url={url}
                trigger="load, click" // クリックして再読み込みしたいときに
                target={`#target_${index}`}
                // pushUrlHistory="true"
              >
                {url}
              </HtmxElement>
              <div id={`target_${index}`} />
            </div>
          ))}
        </Meta>
      </>,
    )
  })

export const coreHonoApp = {
  endpoint: endpoint,
  app: app,
}
