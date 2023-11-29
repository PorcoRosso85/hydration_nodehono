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

const app = new Hono()

const endpoint = '/works'

const endpoints = {
  root: '/',
}

app
  .get(endpoints.root, (c) => {
    return c.html(
      <div class="">
        <button
          type="button"
          hx-target="#target"
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          hx-get="/about/works/login"
        >
          Login
        </button>
        <button
          type="button"
          hx-target="#target"
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          hx-get="/about/works/nav"
        >
          Navigation
        </button>
        <button
          type="button"
          hx-target="#target"
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          hx-get="/about/works/dashboardsample"
        >
          Dashboard Sample
        </button>
        <button
          type="button"
          hx-target="#target"
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          hx-get="/about/works/payment"
        >
          Payment
        </button>
        <button
          type="button"
          hx-target="#target"
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          hx-get="/about/works/products"
        >
          Products
        </button>
        <button
          type="button"
          hx-target="#target"
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          hx-get="/about/works/price"
        >
          Price
        </button>
        <button
          type="button"
          hx-target="#target"
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          hx-get="/about/works/chat"
        >
          Chat
        </button>
        <button
          type="button"
          hx-target="#target"
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          hx-get="/about/works/table"
        >
          Table
        </button>
        <div id="target" />
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
  .get('/login', (c) => {
    return c.html(<Login />)
  })
  .get('/nav', (c) => {
    return c.html(<NavAndIcon />)
  })
  .get('/dashboardsample', (c) => {
    return c.html(<DashBoard />)
  })
  .get('/payment', (c) => {
    return c.html(<Payment />)
  })
  .get('/products', (c) => {
    return c.html(<ProductsGrid />)
  })
  .get('/price', (c) => {
    return c.html(<Price />)
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
