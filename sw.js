self.addEventListener('install', (event) => {
    console.log('{SW} install.......')
})

self.addEventListener('activate', (event) => {
    console.log('{SW} Activate.......')
})

self.addEventListener('fetch', (event) => {
    console.log('{SW} Fetch.......')
})