import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { validator } from 'hono/validator'

import { todoItemsDataSample } from '../../../examples/src/todo/database'
import { EmailAdd, TodoAdd, TodoList } from '../../../examples/src/todo/todo'
import { apiInsertTodoSchema, insertEmailSchema } from '../../../examples/src/todo/validator'
import { PieChart } from './chart'
import { customLogger } from './middleware'

const app = new Hono()

app
  .use('*', logger(customLogger))
  // custom middleware
  // .use("*", async (c, next) => {
  //   await next()
  // })
  .get('/', (c) => {
    return c.render(
      <>
        <EmailAdd />
        <hr />
        <TodoAdd inputedContent="" />
        <TodoList todoItemsData={todoItemsDataSample} />
        <PieChart />
      </>,
    )
  })
  .use(
    '/add/*',

    async (c, next) => {
      await next()
    },
  )
  .post(
    // TODO: register email
    '/register',
    validator('form', (v, c) => {
      const parsed = insertEmailSchema.safeParse(v)
      const errorMessage = 'enter correct email format, use lowerCase, upperCase and special char'
      return parsed.success ? parsed.data : c.text(errorMessage, 401)
    }),
    async (c) => {
      // register email to db

      // TODO: 201? well done message?
      return c.redirect('/', 201)
    },
  )
  .post(
    '/add',
    validator('form', (v, c) => {
      const parsed = apiInsertTodoSchema.safeParse(v)
      const content = v['content']
      const errorMessage = 'validation error'
      return parsed.success
        ? parsed.data
        : // TODO: 200だけどエラーを返す、401でもhtmx:responseErrorトリガーで可能
          c.html(<TodoAdd inputedContent={content} error="true" errorMessage={errorMessage} />)
      // :  c.text("", 401);
    }),
    async (c) => {
      const parseBody = await c.req.valid('form')
      const id = parseBody['id']
      // const id = crypto.randomUUID();
      const content = parseBody['content']
      customLogger('Todo added', `id: ${id}`, `content: ${content}`)
      // db追加

      // db追加完了を確認

      // swap用に追加idのitemを返す
      return c.html(<TodoAdd inputedContent={content} error="false" />)
    },
  )
  .post('/add/email', zValidator('form', insertEmailSchema), async (c) => {
    const parseBody = await c.req.parseBody()
    const email = parseBody['email']
    console.log(email)
    return c.html(<></>)
  })

export { app as todoHonoApp }
