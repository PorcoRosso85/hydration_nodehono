import { Hono } from 'hono'
import { Articles } from './Articles'
import { articles } from './contents/articls'

const app = new Hono()

const endpoint = '/articles'

const endpoints = {
  root: '/',
}

app.get(endpoints.root, (c) => {
  return c.html(<Articles articles={articles} />)
})

export const articlesHonoApp = {
  endpoint: endpoint,
  app: app,
}
