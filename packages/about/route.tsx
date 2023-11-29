import { articlesHonoApp } from '@petittech/articles'
import { worksHonoApp } from '@petittech/works'
import { HtmxElement } from '@quantic/htmx'
import { Hono } from 'hono'
import { Contact } from './Contact'
import { Profile, profileData } from './Profile'

const app = new Hono()

const endpoint = '/about'

const endpoints = {
  root: '/',
  profile: '/profile',
  contact: '/contact',
}

app
  .get(endpoints.root, async (c) => {
    const urls = [
      `${endpoint}${worksHonoApp.endpoint}`,
      `${endpoint}${endpoints.contact}`,
      `${endpoint}${endpoints.profile}`,
      `${endpoint}${articlesHonoApp.endpoint}`,
    ]
    const style = `
    .box-shadow {
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }
    
    .box-shadow:hover {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    `
    return c.html(
      <>
        {urls.map((url, index) => (
          <>
            <details key={index} class="mt-8 ">
              <summary class="font-semibold">{url}</summary>
              <HtmxElement
                elt="div"
                method="get"
                url={url}
                trigger="load"
                // target={`#about_target_${index}`}
              />
              {/* <div id={`about_target_${index}`} /> */}
            </details>
          </>
        ))}
      </>,
    )
  })

  .get(endpoints.profile, (c) => {
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
app.route(worksHonoApp.endpoint, worksHonoApp.app)

export const aboutHonoApp = {
  endpoint: endpoint,
  app: app,
}
