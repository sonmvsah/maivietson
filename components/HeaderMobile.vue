<template>
  

<nav class="flex lg:hidden absolute w-full top-0 items-center justify-between flex-wrap bg-teal-5001 p-3 bg-[#124f9a] z-50">
    <div class="block lg:hidden">
    
    </div>

  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span class="font-semibold text-xl tracking-tight">Pháp Luân Blog</span>
  </div>
  <div class="block lg:hidden">
    <button 
     
      class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
       @click="mvsLog()"
      
      >
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div 
  
  
    class="w-full block flex-grow lg:items-center lg:w-auto"
    :class="{hidden: isClose }"
    
    >
    
    <div class="text-sm lg:flex-grow">
     
      <NuxtLink
        to="/"
       class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        @click.native="hideOnClick()" 
       >
        Trang Chủ
      </NuxtLink>
      <NuxtLink 
        to="/about" 
        class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        @click.native="hideOnClick()" 
        >
            Giới thiệu
      </NuxtLink>

      <NuxtLink 
        to="/phap-luan-cong" 
        class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        @click.native="hideOnClick()"
        >
        Pháp Luân Công là gì
      </NuxtLink>

      <NuxtLink 
      to="/loi-ich" 
      class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
      @click.native="hideOnClick()"
      >
            Lợi ích
      </NuxtLink>
      <NuxtLink 
      to="/cau-chuyen-tu-luyen" 
      class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
      @click.native="hideOnClick()"
      >
            Câu chuyện Tu Luyện
      </NuxtLink>
      <NuxtLink 
      
      to="/faqs" 
      class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
      @click.native="hideOnClick()"
      >
            Câu hỏi thường gặp
      </NuxtLink>
      <NuxtLink 
      to="/tai-lieu" 
      class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
      @click.native="hideOnClick()"
      >
            Tài liệu chính thống
      </NuxtLink>

    </div>
    <div>
      <NuxtLink 
      to="/"  
      class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
      @click.native="hideOnClick()"
      >Download</NuxtLink>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: 'HeaderMobile',
    data() {
      return {
        isClose: true
      };
    },
    methods: {
      mvsLog() {
        this.isClose = !this.isClose
      },
      hideOnClick() {
        this.isClose = true
      },
    }

}
</script>

<style>
    /** */
    .mvs-mobile {
        position: absolute;
        top:0;
        width: 100;
    }
</style>