<template>
  <div class="md:pb-10 pb-0 mvs-h-screen flex flex-col justify-center my-auto md:pt-10">
      
    <section class="relative mvs-h-screen bg-transparent mb-32 md:mb-32 min-h-screen md:min-h-full mvs-h-screen">
       
        <div class="flex flex-col-reverse md:flex-row md:flex-row-reverse md:justify-center justify-between md:mb-20 mt-20 md:mt-0 max-h-screen mix-blend-light">
           
          <div class="basis-1/2 h-auto flex flex-col justify-center space-y-12 md:space-y-8 mt-20 md:mt-0 mix-blend-light">
          <h2 class="text-4xl md:text-6xl text-second-600 text-center font-extrabold mix-blend-screen mix-blend-different">
            CÂU CHUYỆN NHỎ
            </h2>
              <p class="text-3xl md:text-4xl  text-white text-center">
            Nếu nói trái ngành là xu hướng, thì... <br>
            Tôi cũng bị vậy nè. 

            </p>

            <div class="pb-20">
              <Nuxt-link 
                to="/about"
                class=" flex flex-row justify-center space-x-5 my-auto"
              >
                <img class="animate-pulse duration-100 delay-1000	ease-in-out" src="/images/icons-svg/icon-arr.svg" />
                
                <span class="text-2xl text-second-600 text-center font-base mt-2 mix-blend-screen">BẮT ĐẦU !</span> 
                
                
              </Nuxt-link>
            </div>
            <!-- <p class="text-3xl text-gray-500 text-center">Thực ra hình ảnh tạo nên cái hồn của website, giúp website chân thực hơn, sống động hơn,... Nhưng cần dùng đúng cách</p> -->
          </div>
          <img class="hidden md:block basis-1/2 h-auto ml-20 md:ml-0 pb-10 scale-75 w-80 h-auto	h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none mix-blend-light opacity-50 hover:opacity-100" src="/images/about/aboutme.jpeg" alt="" srcset="">
         

        </div>
       
        
    </section>



  </div>
</template>

<script>

export default {
    // name: 'HomeTable',

}
</script>