// import { Layout } from "./layout";
import { sortHonoApp } from '@hydration_hononode/sort'
import { aboutHonoApp } from '@petittech/about'
import { paymentConfig, paymentHonoApp } from '@petittech/payment'
import { Hono } from 'hono'
import { coreHonoApp } from './routes'

const app = new Hono()
app.route(coreHonoApp.endpoint, coreHonoApp.app)
app.route(aboutHonoApp.endpoint, aboutHonoApp.app)

export default app
