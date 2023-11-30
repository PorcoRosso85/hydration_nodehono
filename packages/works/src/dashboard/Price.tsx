const Price = () => (
  <>
    <div class="flex flex-col items-center justify-center min-h-screen p-10 text-gray-700 bg-gray-100 md:p-20">
      <h2 class="text-2xl font-medium">Membership</h2>
      {/* Component Start */}
      <div class="flex flex-wrap items-center justify-center w-full max-w-4xl mt-8">
        <div class="flex flex-col flex-grow mt-8 overflow-hidden bg-white rounded-lg shadow-lg">
          <div class="flex flex-col items-center p-10 bg-gray-200">
            <span class="font-semibold">Standard</span>
            <div class="flex items-center">
              <span class="text-3xl">$</span>
              <span class="text-5xl font-bold">20</span>
              <span class="text-2xl text-gray-500">/mo</span>
            </div>
          </div>
          <div class="p-10">
            <ul>
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span class="ml-2">Private Room</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span class="ml-2">Morning</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span class="ml-2">Public Shower Room</span>
              </li>
            </ul>
          </div>
          <div class="flex px-10 pb-10 justfy-center">
            <button class="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 rounded-lg">
              Join now
            </button>
          </div>
        </div>
        {/* Tile 2 */}
        <div class="z-10 flex flex-col flex-grow mt-8 overflow-hidden transform bg-white rounded-lg shadow-lg md:scale-110">
          <div class="flex flex-col items-center p-10 bg-gray-200">
            <span class="font-semibold">Pro</span>
            <div class="flex items-center">
              <span class="text-3xl">$</span>
              <span class="text-6xl font-bold">50</span>
              <span class="text-2xl text-gray-500">/mo</span>
            </div>
          </div>
          <div class="p-10">
            <ul>
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span class="ml-2 italic">Standard +</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span class="ml-2">Dinner</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span class="ml-2">Private Shower Room</span>
              </li>
            </ul>
          </div>
          <div class="flex px-10 pb-10 justfy-center">
            <button class="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 rounded-lg">
              Join now
            </button>
          </div>
        </div>
        {/* Tile 3 */}
        <div class="flex flex-col flex-grow overflow-hidden bg-white rounded-lg shadow-lg mt-19">
          <div class="flex flex-col items-center p-10 bg-gray-200">
            <span class="font-semibold">Enterprise</span>
            <div class="flex items-center">
              <span class="text-3xl">$</span>
              <span class="text-5xl font-bold">99</span>
              <span class="text-2xl text-gray-500">/mo</span>
            </div>
          </div>
          <div class="p-10">
            <ul>
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span class="ml-2 italic">Pro +</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span class="ml-2">Concierge</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span class="ml-2">Massage</span>
              </li>
            </ul>
          </div>
          <div class="flex px-10 pb-10 justfy-center">
            <button class="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 rounded-lg">
              Join now
            </button>
          </div>
        </div>
      </div>
      {/* Component End  */}
    </div>
    <a
      class="fixed flex items-center justify-center h-8 pr-2 pl-1 bg-blue-600 rounded-full bottom-0 right-0 mr-4 mb-4 shadow-lg text-blue-100 hover:bg-blue-600"
      href="https://twitter.com/lofiui"
      target="_top"
    >
      <div class="flex items-center justify-center h-6 w-6 bg-blue-500 rounded-full">
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <g>
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
          </g>
        </svg>
      </div>
      <span class="text-sm ml-1 leading-none">@lofiui</span>
    </a>
  </>
)

export { Price }
