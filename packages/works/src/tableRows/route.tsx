import { HtmxElement } from '@quantic/htmx'
import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { DataCells, Rows } from './Rows'
import { Table } from './Table'

import { contactsListData } from '../../../../sampleData/formTargetData'

export const endpoint = '/about/works/table'

const app = new Hono().basePath(endpoint)

export const endpoints = {
  root: '/',
  rows: {
    root: '/rows',
    edit: '/rows/edit',
    save: '/rows/save',
  },
  datacells: {
    root: '/datacells',
    edit: '/datacells/edit',
  },
}

app
  .use('*', logger())

  .get(endpoints.root, (c) => {
    return c.html(
      <>
        <table class="w-full h-full">
          <thead>
            <tr>
              <th class="p-1">id</th>
              <th class="p-1">first</th>
              <th class="p-1">last</th>
              <th class="p-1">email</th>
              <th class="p-1"> </th>
            </tr>
          </thead>
          <tbody>
            {contactsListData.map((contact, index) => (
              // TODO: rows.rootを再取得すべき
              // TODO: LazyLoading拡張可能にすべき
              <HtmxElement
                elt="tr"
                method="get"
                url={`${endpoint}${endpoints.rows.edit}`}
                trigger="dblclick"
                target="this"
                swap="outerHTML"
              >
                <td class="pl-2 pr-2">{contact.id}</td>
                <td class="pl-2 pr-2">{contact.firstname}</td>
                <td class="pl-2 pr-2">{contact.lastname}</td>
                <td class="pl-2 pr-2">{contact.email}</td>
              </HtmxElement>
            ))}
          </tbody>
        </table>
      </>,
    )
  })

  .get(endpoints.rows.root, (c) => {
    return c.html(<>{/* <>rows.root</> */}</>)
  })

  .get(endpoints.rows.edit, (c) => {
    return c.html(
      <tr>
        <td>id</td>
        <td>
          <input type="text" name="firstname" placeholder="firstname" />
        </td>
        <td>
          <input type="text" name="lastname" placeholder="lastname" />
        </td>
        <td>
          <input type="email" name="email" placeholder="email" />
        </td>
        <td>
          <HtmxElement
            elt="button"
            method="post"
            url={`${endpoint}${endpoints.rows.save}`}
            include="closest tr"
            swap="outerHTML"
            target="closest tr"
          >
            EDS
          </HtmxElement>
        </td>
      </tr>,
    )
  })

  .post(endpoints.rows.save, async (c) => {
    const parsed = await c.req.parseBody()
    const firstname = parsed['firstname']
    console.debug(firstname)
    // TODO: 200を返す＝DB操作が無事完了したことが前提
    // TODO: rows.rootを再取得すべき
    return c.html(
      <HtmxElement
        elt="tr"
        method="get"
        url={`${endpoint}${endpoints.rows.edit}`}
        trigger="dblclick"
        target="this"
        swap="outerHTML"
      >
        <td>saved</td>
        <td>saved</td>
        <td>saved</td>
      </HtmxElement>,
    )
  })

export const tableHonoApp = {
  endpoint: endpoint,
  app: app,
}
