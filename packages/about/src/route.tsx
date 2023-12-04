import { articlesHonoApp } from '@petittech/articles'
import { worksHonoApp } from '@petittech/works'
import { tableHonoApp } from '@petittech/works/src/tableRows/route'
import { HtmxElement } from '@quantic/htmx'
import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'
import { html } from 'hono/html'
import { Contact } from './Contact'
import { Profile, profileData } from './Profile'

const app = new Hono()

const endpoint = '/about'

const endpoints = {
  root: '/',
  contact: '/contact',
  auth: {
    root: '/auth',
    profile: '/auth/profile',
  },
}

app
  .use(
    `${endpoints.auth.root}/*`,
    basicAuth({
      username: 'por',
      password: 'ros',
    }),
  )

  .get(endpoints.root, async (c) => {
    const urls = [
      [`${endpoint}${endpoints.auth.profile}`, '経歴'],
      [worksHonoApp.endpoint, '制作サンプル'],
      [`${endpoint}${endpoints.contact}`, '連絡フォーム'],
      [`${endpoint}${articlesHonoApp.endpoint}`, '記事サンプル'],
    ]
    const style = `
    .box-shadow {
      box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 0px 0px rgba(0,0,0,0.24);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }
    
    .box-shadow:hover {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    `
    return c.html(
      <>
        <style>{style}</style>
        {urls.map((url, index) => (
          <div class="box-shadow pt-2">
            <HtmxElement
              elt="button"
              method="get"
              url={url[0]}
              target="next div"
              // pushUrlHistory="true"
              class='"overflow-hidden md:max-w-2xs my-5 transform translate-y-1 hover:translate-y-0 duration-500 ease-in-out"'
            >
              <span>
                {url[0]}: {url[1]}
              </span>
            </HtmxElement>
            <div class="pl-4 text-xs" />
          </div>
        ))}
      </>,
    )
  })

  .get(endpoints.auth.profile, (c) => {
    return c.html(
      <>
        <Profile profileData={profileData} />
      </>,
    )
  })

  // .get("/list", (c) => {
  //   return c.render(<PostList />);
  // })

  // .get("/md", (c) => {
  //   return c.html(marked(md));
  // });

  .get(`${endpoints.contact}`, (c) => {
    return c.html(<Contact />)
  })

  .post(`${endpoints.contact}/`, async (c) => {
    const parsed = await c.req.parseBody()
    const email = parsed['email']
    const firstName = parsed['first-name']
    const lastName = parsed['last-name']
    const message = parsed['message']
    console.debug(email, firstName, lastName, message)
    return c.text('')
  })

app.route(articlesHonoApp.endpoint, articlesHonoApp.app)

export const aboutHonoApp = {
  endpoint: endpoint,
  app: app,
}
