// items = object of key/value pairs

function getHtml(items) {
  const imagesExtensions = ['.jpg', '.jpeg', '.gif', '.png', '.webp']
  const videoExtensions = ['.mp4', '.mov', '.webm']

  const imagesKeys = Object.keys(items).filter(item => imagesExtensions.some(v => item.includes(v)))
  const images = Object.keys(items)
  .filter(key => imagesKeys.includes(key))
  .reduce((obj, key) => {
    obj[key] = items[key];
    return obj;
  }, {})

  const videosKeys = Object.keys(items).filter(item => videoExtensions.some(v => item.includes(v)))
  const videos = Object.keys(items)
  .filter(key => videosKeys.includes(key))
  .reduce((obj, key) => {
    obj[key] = items[key];
    return obj;
  }, {})

  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nebary - Decentralized Media Sharing</title>
    <link rel="stylesheet" href="https://bafybeia7shtufhpszi6grhkrm3kunueww2rjmarzzne32qi3ch5pqkjweq.ipfs.infura-ipfs.io/">
    <link rel="stylesheet" href="https://cdn.plyr.io/3.6.8/plyr.css" />
  </head>
  <body>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <nav class="bg-white shadow-sm dark:bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex">
              <div class="flex-shrink-0 flex items-center py-4">
        
              </div>
            </div>
          </div>
        </div>
      </nav>
  
      <div class="py-10">
        <header>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-semibold leading-tight text-gray-900 dark:text-gray-50">
              Your media
            </h1>
          </div>
        </header>
        <main>
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <!-- Replace with your content -->
            <div class="px-4 py-8 sm:px-0">
  
              <!-- Image grid -->
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  
                <!-- Image wrapper -->
                ${Object.entries(images).map(([filename, hash]) => {
                  return `
                <div class="col-span-1 flex flex-col text-center rounded-lg">
                  <!-- Image -->
                  <div class="flex-1 flex flex-col rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 justify-center">
                    <figure>
                      <img src="https://ipfs.infura.io/ipfs/${hash}" alt="">
                    </figure>
                  </div>
                  <!-- Image actions -->
                  <div class="mt-2 flex">
                    <div class="w-0 flex-1 flex">
                      <button data-url="https://ipfs.infura.io/ipfs/${hash}" js-hook="copyUrl" class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-3 text-sm text-gray-700 bg-white shadow font-medium border border-transparent rounded-lg hover:text-gray-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                        </svg>
                        <span class="button-label ml-2">Copy image URL</span>
                      </button>
                    </div>
                  </div>
                </div>`
                }).join('')}
  
                <!-- Video wrapper -->
                ${Object.entries(videos).map(([filename, hash]) => {
                  return `
                <div class="col-span-1 flex flex-col text-center rounded-lg">
                  <!-- Video -->
                  <div class="flex-1 flex flex-col rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 justify-center">
                    <video class="plyr-player w-full h-full" width="320" height="240" controls>
                      <source src="https://ipfs.infura.io/ipfs/${hash}" type="video/mp4">
                    Your browser does not support the video tag.
                    </video>
                  </div>
                  <!-- Video actions -->
                  <div class="mt-2 flex">
                    <div class="w-0 flex-1 flex">
                      <button data-url="https://ipfs.infura.io/ipfs/${hash} js-hook="copyUrl" class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-3 text-sm text-gray-700 bg-white shadow font-medium border border-transparent rounded-lg hover:text-gray-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                        </svg>
                        <span class="button-label ml-2">Copy video URL</span>
                      </button>
                    </div>
                  </div>
                </div>`
                }).join('')}
  
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
          <div class="border-t border-gray-300 pt-8 dark:border-gray-700">
            <p class="text-base text-gray-400 dark:text-gray-500 xl:text-center">
              &copy; 2021 Nebary.
            </p>
          </div>
        </div>
      </footer>
  
    </div>
  
    <script src="https://cdn.plyr.io/3.6.8/plyr.js"></script>
    <script src="https://bafybeibrjn3dev52usjmtxizvhrsbjii2kkgasoj6p55eavm2gjriope2u.ipfs.infura-ipfs.io/"></script>
  </body>
  </html>`
}

module.exports = getHtml
