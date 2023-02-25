<template>
  <div>
    
      <nav class="px-32 hidden lg:flex items-center justify-between flex-wrap bg-[white] border-t-2 border-plc-primary-200 shadow shadow-lg shadow-[#ededed]">

  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <NuxtLink 
        to="/"
       class="block mt-4 mr-4 lg:inline-block lg:mt-0 text-plc-primary px-[0.4rem] py-[0.7rem] hover:text-primary  hover:bg-gray-300 hover:px-[0.4rem] hover:py-[0.7rem]">
        Trang Chủ
      </NuxtLink>
      <NuxtLink to="/about" class="block mt-4 lg:inline-block lg:mt-0 text-plc-primary hover:text-teal-600 mr-4  px-[0.4rem] py-[0.7rem] hover:bg-gray-300 hover:px-[0.4rem] hover:py-[0.7rem]">
            Giới thiệu
      </NuxtLink>

      <NuxtLink to="/phap-luan-cong" class="block mt-4 lg:inline-block lg:mt-0 text-plc-primary hover:text-teal-600 mr-4 px-[0.4rem] py-[0.7rem] hover:bg-gray-300 hover:px-[0.4rem] hover:py-[0.7rem]">
        Pháp Luân Công là gì
      </NuxtLink>

      <NuxtLink to="/loi-ich" class="block mt-4 lg:inline-block lg:mt-0 text-plc-primary hover:text-teal-600 mr-4 px-[0.4rem] py-[0.7rem] hover:bg-gray-300 hover:px-[0.4rem] hover:py-[0.7rem]">
            Lợi ích
      </NuxtLink>
      <NuxtLink to="/cau-chuyen-tu-luyen" class="block mt-4 lg:inline-block lg:mt-0 text-plc-primary hover:text-teal-600 mr-4 px-[0.4rem] py-[0.7rem] hover:bg-gray-300 hover:px-[0.4rem] hover:py-[0.7rem]">
            Câu chuyện Tu Luyện
      </NuxtLink>
      <NuxtLink to="/faqs" class="block mt-4 lg:inline-block lg:mt-0 text-plc-primary hover:text-teal-600 mr-4  px-[0.4rem] py-[0.7rem] hover:bg-gray-300 hover:px-[0.4rem] hover:py-[0.7rem]">
            Câu hỏi thường gặp
      </NuxtLink>
      <NuxtLink to="/tai-lieu" class="block mt-4 lg:inline-block lg:mt-0 text-plc-primary hover:text-teal-600 mr-4 px-[0.4rem] py-[0.7rem] hover:bg-gray-300 hover:px-[0.4rem] hover:py-[0.7rem]">
            Tài liệu chính thống
      </NuxtLink>

    </div>
    <div>
      <NuxtLink to="/"  class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 hover:bg-gray-300">Download</NuxtLink>
    </div>
  </div>
</nav>


    <!-- <div class="cursor"></div> -->
    <div class="cursor">
      <div class="cursor-outer">
        <div class="cursor-inner"></div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
    name: 'Mfooter'

}



</script>

<style>
    /** */
</style>