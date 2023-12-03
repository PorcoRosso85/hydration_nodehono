import { Hono } from 'hono'
import { html } from 'hono/html'
import type { FC } from 'hono/jsx'

import { aboutHonoApp } from '@petittech/about'
import { modalHonoApp } from '@petittech/works/src/modal/route'
import { toastHonoApp } from '@petittech/works/src/toast/route'
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
    const urls = [[aboutHonoApp.endpoint, '著者について']]
    return await c.html(
      <>
        <Meta>
          {urls.map((url, index) => (
            <>
              <div class="box-shadow pt-8">
                <HtmxElement
                  elt="button"
                  method="get"
                  url={url[0]}
                  trigger="load, click" // クリックして再読み込みしたいときに
                  target="next div"
                  // pushUrlHistory="true"
                >
                  <span>{`${url[0]}: ${url[1]}`}</span>
                </HtmxElement>
                <br />
                <span class="text-xs pl-1">
                  ※ 以下サーバーにレンダリングリクエストするボタンです
                </span>
                <div class="pl-4 text-sm" />
              </div>
            </>
          ))}
        </Meta>
      </>,
    )
  })

export const coreHonoApp = {
  endpoint: endpoint,
  app: app,
}
