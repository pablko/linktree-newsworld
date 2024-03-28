export default function Footer () {
  return (
    <footer
      class="flex flex-col md:flex-row items-center justify-center pt-6 pb-3  text-center border-blue-gray-50 gap-x-12">
      <p class=" font-sans text-base  font-normal leading-relaxed ">
        Linktree Clone by <a className="font-semibold hover:text-gray-900 transition-text duration-300" href="https://github.com/pablko" target="_blank">Pablo Colqui</a>
      </p>
      <p class="font-sans text-sm md:text-base antialiased font-normal leading-relaxed text-blue-gray-900">
        Icons from <a className="font-semibold hover:text-gray-900 transition-text duration-300" href="https://flaticon.com" target="_blank">Flaticon</a>
      </p>
    </footer> 
  )
}