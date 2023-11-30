/**
 *
 * Htmxを呼ぶ際に使用できるコンポーネント
 * getメソッドの場合はコンポーネントを呼ぶのではなく、
 * getリクエストをするHtmxを呼ぶ
 * このコンポーネントにより、リクエストと動的に連動させ、
 * 記述量を削減する
 *
 */

type HtmxProps = {
  elt: 'button' | 'div' | 'a' | 'input'
  method: 'get' | 'post' | 'put' | 'delete'
  // reqs: Requests[]
  url: string
  trigger?: string
  target?: string
  swap?: 'innerHTML' | 'outerHTML'
  pushUrlHistory?: 'true' | 'false'
  class?: string
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
      {...(props.class && { class: props.class })}
    >
      {props.children}
    </Element>
  )
}
