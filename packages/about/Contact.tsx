const Contact = () => {
  return (
    <div class="flex flex-col justify-center items-center">
      <div class="space-y-4">
        <input
          name="email"
          type="email"
          placeholder="email"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
        />
        <div class="flex gap-4">
          <input
            name="first-name"
            type="text"
            placeholder="first-name"
            class="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
          />
          <input
            name="last-name"
            type="text"
            placeholder="last-name"
            class="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
          />
        </div>
        <input
          name="message"
          type="text"
          placeholder="message"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
        />
        <button
          type="button"
          hx-post="/about/contact"
          hx-include="[name='email'], [name='first-name'], [name='last-name'], [name='message']"
          hx-swap="none"
          class="w-full bg-black text-white px-4 py-2 border border-black rounded-md hover:bg-gray-800 focus:outline-none"
        >
          submit
        </button>
      </div>
    </div>
  )
}

export { Contact }
