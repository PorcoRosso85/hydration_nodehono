import { HtmxElement } from '@quantic/htmx'
import { Hono } from 'hono'
import { ImageInCanvas, ScriptImageInCanvas } from './canvas'
import { Chat } from './dashboard/Chat'
import { DashBoard } from './dashboard/DashBoard'
import { Login } from './dashboard/Login'
import { NavAndIcon } from './dashboard/NavAndIcon'
import { Payment } from './dashboard/Payment'
import { Price } from './dashboard/Price'
import { ProductsGrid } from './dashboard/ProductsGrid'
import { Dropdown } from './dropdown'
import { Maplibre } from './map'
import { Toast } from './toast'

const app = new Hono()

const endpoint = '/about/works'

const endpoints = {
  root: '/',
  login: '/login',
  nav: '/nav',
  dashboard: '/dashboardsample',
  products: '/products',
  price: '/price',
  payment: '/payment',
  chat: '/chat',
  dropdown: '/dropdown',
  map: '/map',
  imagecanvas: '/imagecanvas',
}

app
  .get(endpoints.root, (c) => {
    return c.html(
      <div class="">
        {Object.values(endpoints).map((value) => (
          <HtmxElement
            elt="button"
            method="get"
            url={`${endpoint}${value}`}
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
  .get(endpoints.dropdown, (c) => {
    return c.html(<Dropdown />)
  })
  .get(endpoints.map, (c) => {
    return c.html(<Maplibre />)
  })
  .get(endpoints.imagecanvas, (c) => {
    return c.html(
      <>
        hi
        <ScriptImageInCanvas />
        <HtmxElement elt="div" method="get" url={`${endpoint}${endpoints.imagecanvas}/component`} />
      </>,
    )
  })
  .get(`${endpoints.imagecanvas}/component`, (c) => {
    return c.html(
      <>
        hi
        <ImageInCanvas />
      </>,
    )
  })

export const worksHonoApp = {
  endpoint: endpoint,
  app: app,
}
