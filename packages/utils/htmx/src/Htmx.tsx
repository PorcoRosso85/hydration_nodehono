type Requests = {
  url: string
}

type HtmxProps = {
  elt: 'button' | 'div'
  reqs: Requests[]
  trigger: string
}

export const HtmxGetButton = (props: HtmxProps) => {
  return (
    <>
      {props.reqs.map((req) => (
        <button type="button" hx-get={`${req.url}`} hx-trigger={`${props.trigger}`}>
          {req.url}
        </button>
      ))}
    </>
  )
}

export const HtmxGetDiv = (props) => {
  return props.reqs.map((req) => (
    <div hx-get={`${req.url}`} hx-trigger={`${props.trigger}`}>
      {req.url}
    </div>
  ))
}

export const HtmxGet = (props: HtmxProps) => {
  const Element = props.elt

  return (
    <>
      {props.reqs.map((req, index) => (
        <Element key={index} hx-get={`${req.url}`} hx-trigger={`${props.trigger}`}>
          {req.url}
        </Element>
      ))}
    </>
  )
}
