import Link from 'next/link'
 
export default function NotFound() {
  return (
    <section class="flex items-center h-screen p-16">
      <div class="container flex flex-col items-center ">
        <div class="flex flex-col gap-6 max-w-md text-center">
          <h2 class="font-extrabold text-6xl text-gray-900 dark:text-gray-100">
              <span class="sr-only">Error</span>404
          </h2>
          <p class="text-xl md:text-2xl dark:text-gray-300">Sorry, we couldn&apos;t find this page.</p>
          <a href="/" class="px-2 py-3 w-48 my-0 mx-auto font-semibold rounded bg-gray-800 text-blue-500 shadow-lg hover:shadow-gray-800 transition-shadow duration-300">Go home</a>
        </div>
      </div>
    </section>
  )
}