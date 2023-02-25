<template>
    <div class="bg-gradient-to-b from-[#4187BF] to-[#FFFFFF]">
        
     
<!-- Section 1 -->
<section class="relative w-full bg-gradient-to-b from-[#4187BF] to-[#FFFFFF] 1bg-dark 1bg-white px-5 mt-0 md:mt-0 md:px-32 z-0  mvs-h-screen  md:mvs-max-h-screen bg-pattem">
    <!-- <div class="w-full h-32 bg-gradient-to-b from-gray-100 to-white"></div> -->
    <!-- <Mvs-tada> -->
    <div class="relative w-full px-5 mx-auto md:px-10 max-w-7xl  bg-transparent rounded-xl">
        <div class="flex flex-row"
        
        
        >
            <div class="md:basis-1/2">
            
                <h1 class="mb-1 text-center text-4xl font-extrabold leading-none text-white lg:text-5xl xl:text-6xl sm:mb-3 1text-stroke 1text-stroke-mvs pt-[5rem] sm:pt-[5rem] md:pt-[8rem]  text-transparent bg-clip-text bg-gradient-to-b from-gray-600 to-[#4187BF] ">Chân dung khách hàng mang lại cho bạn quyết định về mặt thiết kế UI - UX


                </h1>

                <div class="md:hidden md:basis-1/2 text-center flex max-h-[375px] mvs-h-screen">
                <!-- <img class="absolute inset-x-0 bottom-0 p-5 mt-3 md:p-0 md:mt-0 md:scale-100" src="/images/home/banner-right-image-full.png" alt="" srcset=""> -->
 
                <video-background
                    class="bg-pattem 1absolute" 
                    src="/images/bong.mp4"                    
                    style="max-height: 200px; height: 100vh;"
                    overlay="rgba(37, 36, 34, var(--tw-bg-opacity))" 

                >

                </video-background>

                </div>

            </div>
            <div class="absolute hidden md:basis-1/2 md:block mvs-h-screen mvs-max-h-screen  relative">
                <!-- <img class="absolute inset-x-0 bottom-0"  src="/images/home/banner-right-image-full.png" alt="" srcset=""> -->
                 <video-background
                    class="bg-pattem mix-blend-light mt-[7rem]" 
                    src="/images/bong.mp4"                    
                    style="max-height: 400px; height: 100vh;"
                    overlay="rgba(37, 36, 34, var(--tw-bg-opacity))" 
                >

                </video-background>
            </div>

        </div>
        
    </div>
    <!-- </Mvs-tada> -->
</section>
<!-- <p class="text-justify mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-full px-8 px-5 mt-10 md:px-32"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error assumenda a vero dolores, reiciendis maxime aliquid voluptas saepe recusandae, placeat dolorem libero labore distinctio sequi, cupiditate quae natus nobis adipisci?
    dolor sit amet consectetur adipisicing elit. Error assumenda a vero dolores, reiciendis maxime aliquid voluptas saepe recusandae,  <NuxtLink class="text-purple-600" to="/">placeat dolorem</NuxtLink> placeat dolorem libero labore distinctio sequi, cupiditate quae natus nobis adipisci?

</p> -->
        </div>
</template>

<script>
export default {
    name: 'AboutItem',
    layout: 'about',
}
</script>

<style>
 /** */
 a.nuxt-link-exact-active {
    color:yellowgreen;
  }

.text-stroke-mvs {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #fff;
    opacity: .8;
}

.h1 {
    font-size: 9.4vw;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.25;
}
</style>