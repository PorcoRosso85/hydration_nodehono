import { html } from 'hono/html'

export const Toast = () => {
  return (
    <>
      <div class="flex items-center justify-center w-full space-x-4">
        <button
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
        </button>
      </div>

      {html`<div
            x-data="noticesHandler()"
            class="fixed inset-0 flex flex-col-reverse items-end justify-start h-screen w-screen"
            @notice.window="add($event.detail)"
            style="pointer-events:none">
            <template x-for="notice of notices" :key="notice.id">
                <div
                    x-show="visible.includes(notice)"
                    x-transition:enter="transition ease-in duration-200"
                    x-transition:enter-start="transform opacity-0 translate-x-full"
                    x-transition:enter-end="transform opacity-100 translate-x-0"
                    x-transition:leave="transition ease-out duration-500"
                    x-transition:leave-start="transform translate-x-0 opacity-100"
                    x-transition:leave-end="transform translate-x-full opacity-0"
                    @click="remove(notice.id)"
                    class="rounded mb-4 mr-6 w-56  h-16 flex items-center justify-center text-white shadow-lg font-bold text-lg cursor-pointer"
                    :class="{
                        'bg-green-500': notice.type === 'success',
                        'bg-blue-500': notice.type === 'info',
                        'bg-orange-500': notice.type === 'warning',
                        'bg-red-500': notice.type === 'error',
                     }"
                    style="pointer-events:all"
                    x-text="notice.text">
                </div>
            </template>
        </div>`}
    </>
  )
}
