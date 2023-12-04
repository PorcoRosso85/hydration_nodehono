import { html } from 'hono/html'

export const Dropdown = () => {
  return (
    <>
      {html`
       <main x-data="{ modal : false, dropdown : false }"
           class="h-screen flex justify-center items-center text-gray-500 bg-gray-100">
   
           <button @click.prevent=" modal = true "
               class="bg-blue-600 text-blue-50 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-200 mr-2">
               Open Modal
           </button>
   
           <div class="relative">
               <button @click.prevent=" dropdown = true "
                   class="bg-blue-600 text-blue-50 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-200">
                   Dropdown
               </button>
               <!-- Dropdown container -->
               <div x-show="dropdown" @click.away="dropdown = false"
                   class="w-48 absolute bg-white px-4 py-2 rounded shadow-lg space-y-2">
                   <div>Dropdown menu</div>
                   <div>can contain</div>
                   <div>any sort of</div>
                   <div>information</div>
                   <div>and other tags</div>
                   <div>and even images</div>
               </div>
           </div>
   
   
           <!-- Modal Overlay-->
           <div x-show="modal" class="absolute bg-gray-800 bg-opacity-75 inset-0 flex justify-center items-center">
               <!-- Modal Body -->
               <div @click.away=" modal = false " class="bg-white rounded px-4 py-2 w-96">
                   <div class="flex justify-between">
                       <h2 class="font-bold text-lg text-blue-600">Modal Heading</h2>
                       <span @click=" modal = false "
                           class="text-red-200 hover:text-red-700 text-xl font-bold cursor-pointer">&times;</span>
                   </div>
                   <pre class="p-4 bg-black text-gray-100 rounded">
   > Click the close button or outside
     the Modal body to close Modal
     Modal may contain any sort
     of content
                   </pre>
                   <div class="text-right">
                       <span @click=" modal = false " class="cursor-pointer">Close</span>
                   </div>
               </div>
           </div>
   
   
       </main>
        `}
    </>
  )
}
