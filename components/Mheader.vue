<template>
    <header class="flex flex-row bg-second-600 bg-auto h-[60px] md:h-[80px] w-100 bg-no-repeat bg-center mvs-header-bg px-0 md:px-24 mix-blend-plus-light space-x-0">
        <div class="basis-1/3 flex flex-row justify-center">
            <Nuxt-link
                class="my-auto mx-auto 1d-container cursor-pointer scale-75 mt-[0.4rem] md:scale-[0.95]" 
                to="/"
                tag="img"
                :src="require('~/assets/logo-mvs-white.svg')"

            >
            </Nuxt-link> 

            <Nuxt-link
            class="text-xs tracking-widest	 my-auto d-container text-white hidden md:block" 
            to="/"
            >
                TRANG CHỦ
            </Nuxt-link>

            <Nuxt-link
                class="text-xs tracking-widest	 my-auto d-container text-white hidden md:block" 
                to="/services"
            >
            DỊCH VỤ
            </Nuxt-link>
             <Nuxt-link
                class=" text-xs tracking-widest	 my-auto d-container text-white hidden md:block" 
                to="/about"
            >
            VỀ TÔI
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
                    <input type="search" id="default-search" class="bg-second-800 placeholder-[#59B5FF] block w-full p-4 pl-20 text-sm text-white border-none rounded-none md:rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Gõ tên themes, plugin bạn cần tìm..." required />

                </div>
            </form>
        </div>


         <div class="basis-1/3 md:basis-1/3 md:flex flex-row">
            <Nuxt-link
                class="my-auto mx-auto mt-8 d-container cursor-pointer scale-100 md:scale-[0.95] md:hidden" 
                to="/about" 
                tag="img"
                :src="`/images/icons-svg/menu-mob.svg`"
            >
            </Nuxt-link>

            <Nuxt-link
            class="text-xs tracking-widest my-auto d-container text-white hidden md:block" 
            to="/products"
            >
            SẢN PHẨM
            </Nuxt-link>

            <Nuxt-link
            class="text-xs tracking-widest my-auto d-container text-white hidden md:block" 
            to="/blog"
            >
            BLOG
            </Nuxt-link>
            <Nuxt-link
            class="text-xs tracking-widest my-auto d-container text-white hidden md:block" 
            to="/lien-he"
            >
            LIÊN HỆ
            </Nuxt-link>
             <div class="my-auto">
                 <Nuxt-link
                class="  hidden md:block my-auto mx-auto d-container cursor-pointer 1mt-[0.4rem] 1md:scale-[0.95]" 
                to="/"
                tag="img"
                :src="'/images/icons-svg/menu-mob.svg'"

            >
            </Nuxt-link>
            </div>

            
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