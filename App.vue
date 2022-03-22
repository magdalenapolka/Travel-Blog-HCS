<template>
  <header class='bg-blue-600 px-5 py-4'>
    <div class='container mx-auto lg:px-0'>
      <div class='flex items-center justify-between gap-8'>
        <h1 class='uppercase text-white text-3xl font-bold'>logo</h1>
        <div class='flex items-center gap-5'>
          <nav
            id='navbar'
            class='
              fixed
              -right-[999px]
              top-0
              bottom-0
              h-full
              w-72
              bg-white
              lg:bg-transparent
              transition-all
              duration-300
              ease-in-out
              sm:w-64
              lg:static lg:right-0 lg:block lg:w-auto
            '
          >
            <div
              class='absolute right-5 top-5 lg:hidden cursor-pointer'
              id='cross'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='feather feather-x-circle'
              >
                <circle cx='12' cy='12' r='10'></circle>
                <line x1='15' y1='9' x2='9' y2='15'></line>
                <line x1='9' y1='9' x2='15' y2='15'></line>
              </svg>
            </div>
            <ul class='gap-8 px-5 pt-20 pb-5 lg:flex lg:gap-5 lg:py-5 xl:gap-8'>
              <li>
                <router-link
                  to='/'
                  class='inline-block py-2 text-black lg:text-white text-md'
                >
                  Home
                </router-link>
              </li>
              <!-- <li>
                <router-link
                  to='post'
                  class='inline-block py-2 text-black lg:text-white text-md'
                  >Services</router-link
                >
              </li>
              <li>
                <a
                  href='#'
                  class='inline-block py-2 text-black lg:text-white text-md'
                  >Pricing</a
                >
              </li>
              <li>
                <a
                  href='#'
                  class='inline-block py-2 text-black lg:text-white text-md'
                  >Contact Us</a
                >
              </li> -->
            </ul>
            <div class='px-5 pt-10 sm:hidden'>
              <a href='#' class='btn'>Login</a>
            </div>
          </nav>
          <div class='hidden flex-shrink-0 sm:flex'>
            <a href='#' class='btn'>Login</a>
          </div>
          <div class='lg:hidden cursor-pointer' id='burger'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#fff'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='feather feather-menu'
            >
              <line x1='3' y1='12' x2='21' y2='12'></line>
              <line x1='3' y1='6' x2='21' y2='6'></line>
              <line x1='3' y1='18' x2='21' y2='18'></line>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div
      class='
        mobile-overlay
        fixed
        left-0
        top-0
        right-0
        bottom-0
        z-50
        hidden
        h-full
        w-full
        bg-black bg-opacity-30
        transition-all
        duration-500
        ease-in-out
        lg:hidden
      '
    ></div>
  </header>
  <main>
    <router-view></router-view>
  </main>

  <footer class='py-5 bg-neutral-200'>
    <div class='container mx-auto'>
      <h3 class='text-center text-lg'>2022 © Hamburg Coding School Project</h3>
    </div>
  </footer>
</template>

<script>
export default {
  mounted () {
    window.onclick = function (e) {
      if (e.target.matches('.mobile-overlay')) {
        const overlay = document.querySelector('.mobile-overlay')
        const navbar = document.querySelector('#navbar')
        if (overlay.classList.contains('block')) {
          overlay.classList.add('hidden')
        }
        if (navbar.classList.contains('active')) {
          navbar.classList.remove('active')
        }
      }
    }

    // mobile nav
    const burger = document.querySelector('#burger')
    const navbar = document.querySelector('#navbar')
    const overlay = document.querySelector('.mobile-overlay')
    const cross = document.querySelector('#cross')
    burger.addEventListener('click', () => {
      if (overlay.classList.contains('hidden')) {
        overlay.classList.remove('hidden')
        overlay.classList.add('block')
      } else {
        overlay.classList.add('hidden')
        overlay.classList.remove('block')
      }
      if (navbar.classList.contains('active')) {
        navbar.classList.remove('active')
      } else {
        navbar.classList.add('active')
      }
    })

    cross.addEventListener('click', () => {
      overlay.classList.add('hidden')
      overlay.classList.remove('block')
      navbar.classList.remove('active')
    })
  }
}
</script>
