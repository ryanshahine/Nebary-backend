// items = object of key/value pairs

function getHtml(items) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../dist/main.css">
    <script src="main.js" defer></script>
    <meta charset='UTF-8'><link href='https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css' rel='stylesheet'>
  </head>
  <body>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <nav class="bg-white shadow-sm dark:bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex">
              <div class="flex-shrink-0 flex items-center">
                <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
                <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow">
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div class="py-10">
        <header>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold leading-tight text-gray-900 dark:text-gray-50">
              Your media
            </h1>
          </div>
        </header>
        <main>
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <!-- Replace with your content -->
            <div class="px-4 py-8 sm:px-0">

              <!-- Image grid -->
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                <!-- Image wrapper -->
                ${Object.entries(items).map(([filename, hash]) => {
                  return `
                  <div class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-600">
                  <!-- Image -->
                  <div class="flex-1 flex flex-col p-4">
                    <figure>
                      <img src="https://ipfs.infura.io/ipfs/${hash}" alt="" class="rounded-md">
                    </figure>
                  </div>
                  <!-- Image actions -->
                  <div>
                    <div class="-mt-px flex">
                      <div class="w-0 flex-1 flex">
                        <button data-url="https://ipfs.infura.io/ipfs/${hash}" js-hook="copyUrl" class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                          </svg>
                          <span class="ml-3">Copy URL</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>`
                })}
              </div>

            </div>
            <!-- /End replace -->
          </div>
        </main>
      </div>

      <!-- This example requires Tailwind CSS v2.0+ -->
      <footer class="mt-auto bg-gray-100 dark:bg-gray-900" aria-labelledby="footerHeading">
        <h2 id="footerHeading" class="sr-only">Footer</h2>
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div class="mt-12 border-t border-gray-300 pt-8 dark:border-gray-700">
            <p class="text-base text-gray-400 xl:text-center">
              &copy; 2021 Nebary. All rights reserved.
            </p>
          </div>
        </div>
      </footer>


    </div>
  </body>
  </html>`
}

module.exports = getHtml
