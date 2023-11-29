import { Hono } from 'hono'
import { Card } from '../../../examples/src/three/Card'
import { ThreeDemension } from '../../../examples/src/three/ThreeDemension'

const app = new Hono()

app.get('/', (c) => {
  return c.render(
    <>
      <Card />
      {/* <ThreeDemension /> */}
    </>,
  )
})

export { app as threeHonoApp }
