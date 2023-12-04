import { HtmxElement } from '@quantic/htmx'
import { Hono } from 'hono'
import { logger } from 'hono/logger'

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
              // TODO: LazyLoading拡張可能に
              // TODO: ブロックごとにリクエスト
              <HtmxElement
                elt="tr"
                method="get"
                url={`${endpoint}${endpoints.rows.root}/${contact.id}`}
                swap="outerHTML"
                trigger="load"
              />
            ))}
          </tbody>
        </table>
      </>,
    )
  })

  .get(`${endpoints.rows.root}/:id`, (c) => {
    const id = c.req.param('id')
    // console.debug('id', id)
    const contact = contactsListData.find((contact) => contact.id === id)
    return c.html(
      <>
        <HtmxElement
          elt="tr"
          method="post"
          url={`${endpoint}${endpoints.rows.edit}`}
          trigger="dblclick"
          target="this"
          swap="outerHTML"
          // include="[name='hidden-id-input']"
          include="find td"
        >
          <td class="pl-2 pr-2">
            {contact.id}
            <input type="hidden" name="hidden-id-input" value={contact.id} />
          </td>
          <td class="pl-2 pr-2">{contact.firstname}</td>
          <td class="pl-2 pr-2">{contact.lastname}</td>
          <td class="pl-2 pr-2">{contact.email}</td>
        </HtmxElement>
      </>,
    )
  })

  .post(endpoints.rows.edit, async (c) => {
    const parsed = await c.req.parseBody()
    const id = parsed['hidden-id-input']
    console.debug(id)
    const contact = contactsListData.find((contact) => contact.id === id)
    return c.html(
      <tr class="text-indigo-800">
        <td>{contact ? contact.id : ''}</td>
        <td>
          <input
            type="text"
            name="firstname"
            placeholder="firstname"
            value={contact ? contact.firstname : ''}
          />
        </td>
        <td>
          <input
            type="text"
            name="lastname"
            placeholder="lastname"
            value={contact ? contact.lastname : ''}
          />
        </td>
        <td>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={contact ? contact.email : ''}
          />
        </td>
        <td>
          <HtmxElement
            elt="button"
            method="post"
            url={`${endpoint}${endpoints.rows.save}/${contact.id}`}
            include="closest tr"
            swap="outerHTML"
            target="closest tr"
            confirm="Are you sure?"
          >
            EDS
          </HtmxElement>
        </td>
      </tr>,
    )
  })

  .post(`${endpoints.rows.save}/:id`, async (c) => {
    const id = await c.req.param('id')
    console.debug('id: ', id)
    const parsed = await c.req.parseBody()
    const firstname = parsed['firstname']
    const lastname = parsed['lastname']
    const email = parsed['email']
    console.debug(firstname)
    // TODO: 200を返す＝DB操作が無事完了したことが前提
    // TODO: サーバーの内容を返すべき, 結果としてrows.rootエンドポイントで全取得したものと同じであるべき
    return c.html(
      <HtmxElement
        elt="tr"
        method="get"
        url={`${endpoint}${endpoints.rows.root}/${id}`}
        swap="outerHTML"
      >
        {/* TODO: DB登録を確認後、登録したrowデータを返す   */}
        <td>{id}</td>
        <td>{firstname}</td>
        <td>{lastname}</td>
        <td>{email}</td>
      </HtmxElement>,
    )
  })

export const tableHonoApp = {
  endpoint: endpoint,
  app: app,
}
