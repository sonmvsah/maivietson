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

                <div class="md:hidden md:basis-1/2 text-center 1flex 1max-h-[375px] mvs-h-screen max-h-[200px] contents">
                <!-- <img class="absolute inset-x-0 bottom-0 p-5 mt-3 md:p-0 md:mt-0 md:scale-100" src="/images/home/banner-right-image-full.png" alt="" srcset=""> -->
 
                <video-background
                    class="bg-pattem 1absolute max-h-[200px] video--mobile" 
                    src="/images/bong.mp4"                    
                    style="max-height: 200px; height: 100vh;"
                    overlay="rgba(37, 36, 34, var(--tw-bg-opacity))" 

                >

                </video-background>

                </div>

            </div>
            <div class="absolute hidden md:basis-1/2 md:block mvs-h-screen 1mvs-max-h-screen  relative mt-[7rem] max-h-[400px]" >
                <!-- <img class="absolute inset-x-0 bottom-0"  src="/images/home/banner-right-image-full.png" alt="" srcset=""> -->
                 <video-background
                    
                    class="bg-pattem mix-blend-light mt-[7rem] max-h-[400px]" 
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

        </div>
</template>

<script>
export default {
    name: 'Home',
    layout: 'home',
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