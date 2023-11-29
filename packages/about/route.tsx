import { articlesHonoApp } from '@petittech/articles'
import { worksHonoApp } from '@petittech/works'
import { Hono } from 'hono'
import { Contact } from './Contact'
import { Profile, profileData } from './Profile'

const app = new Hono()
const endpoint = '/about'

app
  .get('/', (c) => {
    return c.html(<Profile profileData={profileData} />)
  })

  // .get("/list", (c) => {
  //   return c.render(<PostList />);
  // })

  // .get("/md", (c) => {
  //   return c.html(marked(md));
  // });

  .get('/contact', (c) => {
    return c.html(<Contact />)
  })
  .post('/contact', async (c) => {
    const parsed = await c.req.parseBody()
    const email = parsed['email']
    const firstName = parsed['first-name']
    const lastName = parsed['last-name']
    const message = parsed['message']
    console.debug(email, firstName, lastName, message)
    return c.text('')
  })

app.route('/articles', articlesHonoApp)
app.route('/works', worksHonoApp)

export const aboutHonoApp = {
  endpoint: endpoint,
  app: app,
}
