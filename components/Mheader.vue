<template>
    <header class="flex flex-row bg-[#4187BF] bg-auto h-[60px] md:h-[80px] w-100 bg-no-repeat bg-center mvs-header-bg px-0 md:px-24 mix-blend-plus-light">
        <div class="basis-1/3 flex flex-row">
            <Nuxt-link
                class="my-auto mx-auto 1d-container cursor-pointer scale-75 mt-[0.4rem] md:scale-[0.95]" 
                to="/"
                tag="img"
                :src="require('~/assets/logo-mvs-white.svg')"

            >
            </Nuxt-link>

            <Nuxt-link
                class="my-auto d-container cursor-pointer hidden md:block" 
                to="/" 
                tag="img"
                :src="`/images/icons-svg/grid-mvs.svg`"
            >
            </Nuxt-link>

           

            <Nuxt-link
            class="my-auto d-container text-white hidden md:block" 
            to="/"
            >
                Trang chủ
            </Nuxt-link>

            <Nuxt-link
                class="my-auto d-container text-white hidden md:block" 
                to="/services"
            >
            Dịch vụ
            </Nuxt-link>
        </div>
        <div 
        class="basis-1/2 md:basis-1/3 my-auto mx-auto"
        >
            <h2 class="text-[1.1rem] sm:text-[1.3rem] font-extrabold leading-none text-white md:hidden sm:mb-3 text-center mt-[1rem]">MAI VIỆT SƠN</h2>
                <form class="hidden md:block">   
            <label for="default-search" class="mb-2 text-sm  font-medium text-gray-900 sr-only dark:text-white">Tìm kiếm</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-white">
                    <svg aria-hidden="true" class="w-5 h-5 text-[#59B5FF] dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" class="bg-[#3A79AB] placeholder-[#59B5FF] block w-full p-4 pl-20 text-sm text-white border-none rounded-none md:rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Gõ tên themes, plugin bạn cần tìm..." required>
                <div class="text-white absolute right-2.5 bottom-0.5 inset-y-0 items-center pl-3 my-auto pointer-events-none flex">
                    <!-- <svg aria-hidden="true" class="w-5 h-5 text-white dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> -->
                </div>
            </div>
        </form>
        </div>


         <div class="basis-1/3 md:basis-1/3 md:flex flex-row">
            <Nuxt-link
                class="my-auto mx-auto mt-8 d-container cursor-pointer scale-100 md:scale-[0.95] md:hidden" 
                to="/" 
                tag="img"
                :src="`/images/icons-svg/menu-mob.svg`"
            >
            </Nuxt-link>

            <Nuxt-link
            class="my-auto d-container text-white hidden md:block" 
            to="/themes"
            >
            Themes
            </Nuxt-link>

            <Nuxt-link
                class="my-auto d-container text-white hidden md:block" 
                to="/plugins"
            >
            Plugins
            </Nuxt-link>
            <!-- <Nuxt-link
                class="my-auto d-container cursor-pointer" 
                to="/"
                tag="img"
                :src="require('~/assets/logo-mvs-white.svg')"

            > 
            </Nuxt-link> -->
            <Nuxt-link
            class="my-auto d-container text-white hidden md:block" 
            to="/blog"
            >
            Blog
            </Nuxt-link>
            <Nuxt-link
            class="my-auto d-container text-white hidden md:block" 
            to="/lien-he"
            >
            Liên hệ
            </Nuxt-link>

            <!-- <Nuxt-link
                class="my-auto d-container cursor-pointer text-white" 
                to="/" 
                tag="img"
                :src="`/images/icons-svg/grid-mvs.svg`"
            >
                 <img src="/images/icons-svg/grid-mvs.svg" /> 
            </Nuxt-link> -->

          

            
        </div>
 

        


  </header>
</template>

<script>
export default {
    name: 'Mheader'
}
</script>

<style>
    /** */
    .d-container {
        padding: 0 1.5rem;
    }
    
    
</style>