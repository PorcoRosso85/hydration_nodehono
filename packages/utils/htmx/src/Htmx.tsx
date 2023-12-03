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
  elt: 'button' | 'div' | 'a' | 'input' | 'tr' | 'td' | 'th' | 'thead' | 'tbody'
  method: 'get' | 'post' | 'put' | 'delete'
  // reqs: Requests[]
  url: string
  trigger?: string
  target?: string
  swap?: 'innerHTML' | 'outerHTML' | 'beforeend'
  include?: string
  on?: string
  pushUrlHistory?: 'true' | 'false'
  confirm?: string
  id?: string
  class?: string
  children?: any
}

export const HtmxElement = (props: HtmxProps) => {
  const { elt: Element, children } = props
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
      {...(props.include && { 'hx-include': props.include })}
      {...(props.on && { 'hx-on': props.on })}
      {...(props.confirm && { 'hx-confirm': props.confirm })}
      {...(props.pushUrlHistory !== undefined && {
        'hx-push-url': props.pushUrlHistory.toString(),
      })}
      {...(props.class && { class: props.class })}
      {...(props.id && { id: props.id })}
    >
      {children}
    </Element>
  )
}
