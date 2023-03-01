<template>
  <div class="md:bg-transparent 1bg-pattem min-h-screen md:pb-10 pb-0   max-h-screen flex flex-col justify-center">
      
    <section class="relative mvs-h-screen bg-transparent  px-5 mb-32 md:mb-32 md:px-32 min-h-screen md:min-h-full 1bg-pattem">
       
        <div class="flex flex-col-reverse md:flex-row justify-between md:ml-20  md:mb-20 mt-20 md:mt-0 max-h-screen">
           
          <div class="basis-1/2 h-auto flex flex-col justify-center space-y-12 md:space-y-8 mt-20 md:mt-0">
          <h2 class="text-4xl md:text-6xl text-second-600 text-center font-extrabold mix-blend-screen	">
            MẸO #1
            </h2>
              <p class="text-3xl md:text-4xl  text-gray-500 text-center">
            Hình ảnh tạo nên cái hồn của website, giúp website chân thực hơn, sống động hơn,... Nhưng cần dùng đúng cách !

            </p>

            <div class="pb-20">
              <Nuxt-link 
                to="/about"
                class=" flex flex-row justify-center space-x-5 my-auto"
              >
                <img class="animate-pulse duration-100 delay-1000	ease-in-out" src="/images/icons-svg/icon-arr.svg" />
                
                <span class="text-2xl text-primary-600 text-center font-base mt-2">BẮT ĐẦU !</span> 
                
                
              </Nuxt-link>
            </div>
            <!-- <p class="text-3xl text-gray-500 text-center">Thực ra hình ảnh tạo nên cái hồn của website, giúp website chân thực hơn, sống động hơn,... Nhưng cần dùng đúng cách</p> -->
          </div>
          <img class="hidden md:block basis-1/2 h-auto ml-20 md:ml-0 pb-10" src="/images/home/banner-right-image-full.png" alt="" srcset="">
        </div>
       
        
    </section>



  </div>
</template>

<script>

export default {
    // name: 'HomeTable',

}
</script>