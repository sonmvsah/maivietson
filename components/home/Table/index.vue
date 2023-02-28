<template>
  <div class="bg-pattem bg-gray-200 max-h-full flex flex-col justify-center pb-20 md:pb-0">
      
    <!-- Section 1 -->
    <section class="relative 1mvs-h-screen bg-transparent  px-5  mt-20 md:mt-0 md:pt-20 md:px-32 1md:mb-20 min-h-screen my-auto">
        <div class="mx-auto">
            <h1 class="text-4xl md:text-6xl text-second-600 text-center font-extrabold">
            Cái Chiiiii!
            </h1>
            <p class="hidden md:block text-base md:text-2xl text-second-gray text-center">Bạn đã bỏ qua hoặc đọc qua mẹo ở trên mà chưa tìm thấy đáp án, <br> vậy bạn đang mong muốn điều gì dưới đây...?</p>
             <p class="text-base md:hidden text-second-gray text-center">Bạn vẫn chưa tìm được thứ mình cần, <br> vậy thử với những điều sau xem nhé...?</p>
        </div>
        <div class="pt-5 md:pt-20">
           <div class="flex flex-col md:flex-row mx-auto text-center items-center md:items-center">
              <div class="mx-auto text-center basis-1/2 md:border-r md:border-b md:border-second-gray  min-h-[200px] pb-5">
              <HomeTableItem v-bind="item1" />
              </div>

              <div class="mx-auto text-center basis-1/2 md:border-b md:border-second-gray min-h-[200px] pb-5">
              <HomeTableItem v-bind="item2" />
              </div>
            </div>
        <div class="flex flex-col md:flex-row mx-auto text-center items-center md:items-center">
            <div class="mx-auto text-center basis-1/2 md:border-r md:border-second-gray min-h-[200px] pt-5">
            <HomeTableItem v-bind="item3" />
            </div>
            <div class="mx-auto text-center basis-1/2 min-h-[200px] pt-5">
            <HomeTableItem  v-bind="item4"/>
            </div>
        </div>
        </div>
       
        
    </section>


  </div>
</template>

<script>

export default {
    // name: 'HomeTable',
  
   data() {
      return {
        item1: {
            title: "#DỊCH_VỤ",
            summary: "Bạn muốn tìm hiểu dịch vụ thiết kế website, SEO, Quảng cáo của Sơn",
            fall: "Bỏ qua nếu đã có website",
            but_title: "Xem dịch vụ",
            linkto: "/services" 
        },
         item2: {
            title: "#SẢN_PHẨM",
            summary: "Bạn quan tâm các sản phẩm Themes, plugins Wordpress, Danh thiếp thông Sơn",
            fall: "Niềm vui đi chợ !",
            but_title: "Đi chợ nào ",
            linkto: "/about" 
        },
         item3: {
            title: "#CỘNG_TÁC_VIÊN",
            summary: "Bạn là Agency hoặc Sale marketing muốn kiếm thêm thu nhập, hãy liên hệ Sơn",
            fall: "Chương trình Cộng tác viên",
            but_title: "Tham gia ngay",
            linkto: "/ctv" 
        },
         item4: {
            title: "#BLOG",
            summary: "Muốn xem thêm các bài chia sẻ về Thiết kế website, Marketing Online của Sơn",
            fall: "Bỏ qua nếu đã có website",
            but_title: "Đọc ủng hộ",
            linkto: "/blog" 
        },

      }
    },



}
</script>

<style>
   @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

</style>