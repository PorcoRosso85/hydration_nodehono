import { HtmxElement } from '@quantic/htmx'
import { Hono } from 'hono'

const endpoint = '/about/works/toast'

const app = new Hono().basePath(endpoint)

const endpoints = {
  root: '/',
  success: '/success',
  info: '/info',
  warning: '/warning',
  error: '/error',
}

app
  .get(endpoints.root, (c) => {
    return c.html(
      <div class="flex items-center justify-center w-full space-x-4">
        {/* <button
          x-data
          type="button"
          x-on:click="$dispatch('notice', {type: 'success', text: '🔥 Success!'})"
          class="bg-green-500 text-lg font-bold p-6 py-2 text-white shadow-md rounded"
        >
          Success
        </button>
        <button
          x-data
          type="button"
          x-on:click="$dispatch('notice', {type: 'info', text: 'ᕦ(ò_óˇ)ᕤ'})"
          class="bg-blue-500 text-lg font-bold p-6 py-2 text-white shadow-md rounded"
        >
          Info
        </button>
        <button
          x-data
          type="button"
          x-on:click="$dispatch('notice', {type: 'warning', text: '⚡ Warning'})"
          class="bg-orange-500 text-lg font-bold p-6 py-2 text-white shadow-md rounded"
        >
          Warning
        </button>
        <button
          x-data
          type="button"
          x-on:click="$dispatch('notice', {type: 'error', text: '😵 Error!'})"
          class="bg-red-500 text-lg font-bold p-6 py-2 text-white shadow-md rounded"
        >
          Error
        </button> */}
        <HtmxElement
          elt="button"
          method="get"
          url={`${endpoint}${endpoints.success}`}
          class="bg-green-500 text-lg font-bold p-6 py-2 text-white shadow-md rounded"
        >
          success
        </HtmxElement>
      </div>,
    )
  })
  .get(endpoints.success, (c) => {
    // modalな小さく、自然と消えるスタイルの要素を指定した座標に設置するだけ
    return c.html(
      <>
        {/* 自然と消えるスタイルと座標 */}
        <style />
        {/* 他のToast要素との順番 */}
        <script />

        <div />
      </>,
    )
  })

export const toastHonoApp = {
  endpoint: endpoint,
  app: app,
}
