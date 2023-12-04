const Table = () => (
  <div class="m-auto p-6 bg-gray-200 w-full h-full">
    <h1 class="text-4xl mb-2">Table Examples</h1>
    <h2 class="text-xl mb-2">Full Width</h2>
    <div class="w-full max-w-full block overflow-x-auto my-4 shadow border-b border-gray-200 sm:rounded-lg">
      <table class="w-full divide-y divide-gray-200 ">
        <thead class="bg-gray-50">
          <tr>
            <th class="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product
            </th>
            <th class="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quantity
            </th>
            <th class="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr class="even:bg-gray-50">
            <td class="py-4 px-6">Cheese Sandwich</td>
            <td class="py-4 px-6">1</td>
            <td class="py-4 px-6">$4.95</td>
          </tr>
          <tr class="even:bg-gray-50">
            <td class="py-4 px-6">Cheese Sandwich</td>
            <td class="py-4 px-6">1</td>
            <td class="py-4 px-6">$4.95</td>
          </tr>
          <tr class="even:bg-gray-50">
            <td class="py-4 px-6">Cheese Sandwich</td>
            <td class="py-4 px-6">1</td>
            <td class="py-4 px-6">$4.95</td>
          </tr>
          <tr class="even:bg-gray-50">
            <td class="py-4 px-6">Cheese Sandwich</td>
            <td class="py-4 px-6">1</td>
            <td class="py-4 px-6">$4.95</td>
          </tr>
          <tr class="even:bg-gray-50">
            <td class="py-4 px-6">Cheese Sandwich</td>
            <td class="py-4 px-6">1</td>
            <td class="py-4 px-6">$4.95</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h2 class="text-xl mb-2">Auto Width</h2>
    <div class="w-auto max-w-full inline-block overflow-x-auto my-4 shadow border-b border-gray-200 sm:rounded-lg">
      <table class="w-auto divide-y divide-gray-200 ">
        <thead class="bg-gray-50">
          <tr>
            <th class="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product
            </th>
            <th class="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quantity
            </th>
            <th class="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr class="even:bg-gray-50">
            <td class="py-4 px-6">Cheese Sandwich</td>
            <td class="py-4 px-6">1</td>
            <td class="py-4 px-6">$4.95</td>
          </tr>
          <tr class="even:bg-gray-50">
            <td class="py-4 px-6">Cheese Sandwich</td>
            <td class="py-4 px-6">1</td>
            <td class="py-4 px-6">$4.95</td>
          </tr>
          <tr class="even:bg-gray-50">
            <td class="py-4 px-6">Cheese Sandwich</td>
            <td class="py-4 px-6">1</td>
            <td class="py-4 px-6">$4.95</td>
          </tr>
          <tr class="even:bg-gray-50">
            <td class="py-4 px-6">Cheese Sandwich</td>
            <td class="py-4 px-6">1</td>
            <td class="py-4 px-6">$4.95</td>
          </tr>
          <tr class="even:bg-gray-50">
            <td class="py-4 px-6">Cheese Sandwich</td>
            <td class="py-4 px-6">1</td>
            <td class="py-4 px-6">$4.95</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h2 class="text-xl mb-2">Responsive Scroll</h2>
    <div class="w-auto max-w-full inline-block overflow-x-auto my-4 shadow border-b border-gray-200 sm:rounded-lg">
      <table style={{ width: 1000 }} class="w-full divide-y divide-gray-200 ">
        <thead class="bg-gray-50">
          <tr>
            <th class="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product
            </th>
            <th class="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quantity
            </th>
            <th class="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr class="even:bg-gray-50">
            <td class="py-4 px-6">Cheese Sandwich</td>
            <td class="py-4 px-6">1</td>
            <td class="py-4 px-6">$4.95</td>
          </tr>
          <tr class="even:bg-gray-50">
            <td class="py-4 px-6">Cheese Sandwich</td>
            <td class="py-4 px-6">1</td>
            <td class="py-4 px-6">$4.95</td>
          </tr>
          <tr class="even:bg-gray-50">
            <td class="py-4 px-6">Cheese Sandwich</td>
            <td class="py-4 px-6">1</td>
            <td class="py-4 px-6">$4.95</td>
          </tr>
          <tr class="even:bg-gray-50">
            <td class="py-4 px-6">Cheese Sandwich</td>
            <td class="py-4 px-6">1</td>
            <td class="py-4 px-6">$4.95</td>
          </tr>
          <tr class="even:bg-gray-50">
            <td class="py-4 px-6">Cheese Sandwich</td>
            <td class="py-4 px-6">1</td>
            <td class="py-4 px-6">$4.95</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="h-28" />
  </div>
)

export { Table }
