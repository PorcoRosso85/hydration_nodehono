type Requests = {
  url: string
}

type HtmxProps = {
  elt: 'button' | 'div'
  method: 'get' | 'post' | 'put' | 'delete'
  // reqs: Requests[]
  url: string
  trigger?: string
  target?: string
  swap?: 'innerHTML' | 'outerHTML'
  pushUrlHistory?: boolean
  children?: any
}

export const HtmxElement = (props: HtmxProps) => {
  const Element = props.elt
  const hxMethodAttribute = {
    get: { 'hx-get': props.url },
    post: { 'hx-post': props.url },
    put: { 'hx-put': props.url },
    delete: { 'hx-delete': props.url },
  }[props.method]
  return (
    <Element
      {...hxMethodAttribute}
      {...(props.trigger && { 'hx-trigger': props.trigger })}
      {...(props.target && { 'hx-target': props.target })}
      {...(props.swap && { 'hx-swap': props.swap })}
      {...(props.pushUrlHistory !== undefined && {
        'hx-push-url': props.pushUrlHistory.toString(),
      })}
    >
      {props.children}
    </Element>
  )
}
