import { Hono } from 'hono'
import { Works } from './Works'

import { works } from './Works'
import { DashboardApp } from './dashboard/App'
import { Chat } from './dashboard/Chat'
import { DashBoard } from './dashboard/DashBoard'
import { Login } from './dashboard/Login'
import { NavAndIcon } from './dashboard/NavAndIcon'
import { Payment } from './dashboard/Payment'
import { Price } from './dashboard/Price'
import { ProductsGrid } from './dashboard/ProductsGrid'
import { Table } from './dashboard/Table'

import { HtmxElement } from '@quantic/htmx'

const app = new Hono()

const endpoint = '/works'

const endpoints = {
  root: '/',
  login: '/login',
  nav: '/nav',
  dashboard: '/dashboardsample',
  products: '/products',
  price: '/price',
  payment: '/payment',
  chat: '/chat',
  table: '/table',
}

app
  .get(endpoints.root, (c) => {
    return c.html(
      <div class="">
        {Object.values(endpoints).map((value) => (
          <HtmxElement
            elt="button"
            method="get"
            url={`/about${endpoint}${value}`}
            class="bg-blue-300 text-white py-1 px-2 rounded hover:bg-blue-500 m-2"
            target="#target"
          >
            {value}
          </HtmxElement>
        ))}
        <div id="target" class="mt-8" />
      </div>,
    )
  })

  // .get("/dashboard", (c) => {
  //   return c.html(
  //     <>
  //       <DashboardApp />
  //     </>
  //   );
  // })
  //
  .get('/login', (c) => {
    return c.html(<Login />)
  })

  .get('/nav', (c) => {
    return c.html(<NavAndIcon />)
  })

  .get('/dashboardsample', (c) => {
    return c.html(<DashBoard />)
  })

  .get('/products', (c) => {
    return c.html(<ProductsGrid />)
  })

  .get('/price', (c) => {
    return c.html(<Price />)
  })

  .get('/payment', (c) => {
    return c.html(<Payment />)
  })

  .get('/chat', (c) => {
    return c.html(<Chat />)
  })

  .get('/table', (c) => {
    return c.html(<Table />)
  })

export const worksHonoApp = {
  endpoint: endpoint,
  app: app,
}
