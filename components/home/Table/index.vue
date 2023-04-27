<template>
  <div class="bg-pattem bg-transparent bg-white max-h-full flex flex-col justify-center pb-20 md:pb-0">
      
    <!-- Section 1 -->
    <section class="relative 1mvs-h-screen bg-transparent  px-5  mt-20 md:mt-0 md:pt-20 md:px-32 1md:mb-20 min-h-screen my-auto">
        <div class="mx-auto ">
            <h2 class="text-4xl md:text-6xl text-second-600 text-center font-extrabold">
              <span class="text-2xl">#WEB4LEVEL</span> <br>
             Tay ngang Sẵn sàng làm web ?  
            </h2>
            <p class="hidden md:block text-base md:text-2xl text-sblack text-center">Bạn đang ở Level nào, <br> Hoặc tốt hơn hết đọc dưới đây...</p>
             <p class="text-base md:hidden text-second-gray text-center">Bạn đang ở Level nào, <br> Hoặc tốt hơn hết đọc dưới đây...</p>
        </div>
        <div class="mt-5 pt-5 md:pt-15 md:pb-10 bg-primary-100">
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
            title: "Level #1",
            summary: "Bạn muốn tìm hiểu dịch vụ thiết kế website, SEO, Quảng cáo của Sơn",
            fall: "Bỏ qua nếu đã có website",
            but_title: "Xem dịch vụ",
            linkto: "/services" 
        },
         item2: {
            title: "Level #2",
            summary: "Bạn quan tâm các sản phẩm Themes, plugins Wordpress, Danh thiếp thông Sơn",
            fall: "Niềm vui đi chợ !",
            but_title: "Đi chợ nào ",
            linkto: "/about" 
        },
         item3: {
            title: "Level #3",
            summary: "Bạn là Agency hoặc Sale marketing muốn kiếm thêm thu nhập, hãy liên hệ Sơn",
            fall: "Chương trình Cộng tác viên",
            but_title: "Tham gia ngay",
            linkto: "/ctv" 
        },
         item4: {
            title: "Level #4",
            summary: "Muốn xem thêm các bài chia sẻ về Thiết kế website, Marketing Online của Sơn",
            fall: "Bỏ qua nếu đã có website",
            but_title: "Đọc ủng hộ",
            linkto: "/blog" 
        },

      }
    },



}
</script>
