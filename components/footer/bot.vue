<template>
  <div class="1bg-gradient-to-b 1from-transparent 1to-second-600 min-h-[150px] md:h-[150px] mt-[20rem]">
      
    <!-- Section 1 -->
    <section class="bg-pattem">
        <hr width="82%" class="mx-auto my-5 md:my-0" />
    <div class="bg-second-600  bg-pattem"></div> 
        <section class="relative bg-transparent px-5 md:px-32 flex flex-col md:flex-row h-100 min-h-[150px]">
            <div class="text-center md:text-left basis-1/3 flex flex-col h-100 py-auto justify-center space-y-2">
                <h2 class="text-3xl text-white font-extrabold">MAI VIỆT SƠN</h2>
            
                <Nuxt-link 
                class="mr-5 text-white text-sm font-extralight"
                to="/blog"
                > Chính sách riêng tư | Điều khoản dịch vụ </Nuxt-link>

                <p class="mr-5 text-white text-sm font-extralight"> © 2023, thiết kế và vận hành bởi Mai Việt Sơn</p>

            </div>
            <div class="basis-2/3 flex flex-col justify-evenly">
                <div class="hidden md:flex flex-row justify-between w-100 text-center">
                    <Nuxt-link 
                    class="mr-5 text-white text-base font-base"
                    to="/blog"
                > Đào tạo </Nuxt-link>
                 <Nuxt-link
                    class="mr-5 text-white text-base font-base" 
                    to="/bang-gia"
                > Bảng giá </Nuxt-link>
                 <Nuxt-link
                    class="mr-5 text-white text-base font-base" 
                    to="/bang-gia"
                > Dịch vụ </Nuxt-link>
                <Nuxt-link
                    class="mr-5 text-white text-base font-base" 
                    to="/bang-gia"
                > Themes </Nuxt-link>
                <Nuxt-link
                    class="mr-5 text-white text-base font-base" 
                    to="/bang-gia"
                > Plugins </Nuxt-link>
                <Nuxt-link
                    class="mr-5 text-white text-base font-base" 
                    to="/bang-gia"
                > Blog </Nuxt-link>
                <Nuxt-link
                    class="1mr-5 text-white text-base font-base" 
                    to="/bang-gia"
                > Liên hệ </Nuxt-link>
                </div>

                <div class="flex flex-col md:flex-row content-center justify-between mb-5 md:mb-0">
                   <p class="text-white opacity-75 text-base font-extralight text-center md:text-left py-5 md:py-0"> Theo dõi tôi trên các nền tảng khác</p>
                   <hr class="pt-5 md:pt-0 my-auto md:mx-5 mx-auto opacity-50 gray-200" width="20%"/>
                   <div class="flex flex-row justify-center md:justify-evenly space-x-3 md:space-x-8 expand">
                       <a href="https://youtube.com" target="_blank">
                        <img src="/images/icons-svg/youtube.svg" alt="">
                       </a>
                       <a href="https://youtube.com" target="_blank">
                        <img src="/images/icons-svg/facebook.svg" alt="">
                       </a>
                       <a href="https://youtube.com" target="_blank">
                        <img src="/images/icons-svg/twitter.svg" alt="">
                       </a>
                       <a href="https://youtube.com" target="_blank">
                        <img src="/images/icons-svg/instagram.svg" alt="">
                       </a>
                       
                   </div>

                </div>
                
            </div>
        </section>
    </section>
    

  </div>
</template>

<script>

export default {
    // name: 'HomeTable',

}
</script>

<style>
</style>