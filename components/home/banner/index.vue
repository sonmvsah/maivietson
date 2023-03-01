<template>
        <div class="bg-gradient-to-b from-second-600 to-sblack">

            <section class="relative w-full bg-gradient-to-b from-second-600 to-sblack 1bg-dark 1bg-white px-5 mt-0 md:mt-0 md:px-32 z-0  mvs-h-screen  md:mvs-max-h-screen bg-pattem mix-blend-bg 1mix-blend-light">
                <div class="relative w-full px-5 mx-auto md:px-10 max-w-7xl  bg-transparent rounded-xl">
                    <div class="flex flex-row"
                    >
                        <div class="md:basis-1/2">
                        
                            <h1 class="mb-1 text-center text-4xl font-extrabold leading-none text-white lg:text-5xl xl:text-6xl sm:mb-3 1text-stroke 1text-stroke-mvs pt-[5rem] sm:pt-[5rem] md:pt-[8rem]  1text-transparent text-second-gray 1text-[#3cfd7c] bg-clip-text bg-gradient-to-b from-gray-600 to-[#4187BF] mix-blend-light">Chân dung khách hàng mang lại cho bạn quyết định về mặt thiết kế UI - UX


                            </h1>

                            <div class="md:hidden md:basis-1/2 text-center 1flex 1max-h-[375px] mvs-h-screen max-h-[50vh] sm:max-h-[200px] bg-pattem">
                            <!-- <img class="absolute inset-x-0 bottom-0 p-5 mt-3 md:p-0 md:mt-0 md:scale-100" src="/images/home/banner-right-image-full.png" alt="" srcset=""> -->
            
                            <video-background
                                class="bg-pattem 1absolute mix-blend-light1 mix-blend-bg max-h-[30vh] 1max-h-[200px] mobile" 
                                src="/images/bong.mp4"                    
                                style="1max-height: 200px; height: 100vh;"
                                overlay="rgba(37, 36, 34, var(--tw-bg-opacity))" 

                            >

                            </video-background>

                            </div>

                        </div>
                        <div class="absolute hidden md:basis-1/2  md:block mvs-h-screen 1mvs-max-h-screen  relative mt-[7rem] max-h-[400px] min-h-[400px] bg-pattem" >
                            <!-- <img class="absolute inset-x-0 bottom-0"  src="/images/home/banner-right-image-full.png" alt="" srcset=""> -->
                            <video-background
                                
                                class="bg-pattem 1mix-blend-light mix-blend-bg 1mt-[7rem] max-h-[400px]" 
                                src="/images/bong.mp4"                    
                                style="max-height: 400px; height: 100vh;"
                                overlay="rgba(37, 36, 34, var(--tw-bg-opacity))" 
                            >

                            </video-background>
                        </div>

                    </div>
                    
                </div>
               
            </section>
       
        </div>
</template>

<script>

export default {
    // name: 'HomeBanner',
   data() {
      return {
        posts: []
      }
    },
   
}
</script>

<style>
   @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

</style>