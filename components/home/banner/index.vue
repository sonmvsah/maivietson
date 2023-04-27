<template>
        <div class="bg-gradient-to-b from-second-600 to-swhite mvs-h-screen">

            <section class="relative w-full bg-gradient-to-b from-second-600 to-sblack 1bg-dark 1bg-white px-5 mt-0 md:mt-0 md:px-32 z-0  mvs-h-screen  md:mvs-max-h-screen bg-pattem mix-blend-bg 1mix-blend-light">
                <div class="relative w-full px-5 mx-auto md:px-10 max-w-7xl  bg-transparent rounded-xl">
                    <div class="flex flex-row"
                    >
                        <div class="md:basis-1/2">
                        
                            <h1 class="mb-1 text-center text-4xl font-extrabold leading-none text-white lg:text-5xl xl:text-6xl sm:mb-3 pt-[5rem] sm:pt-[5rem] md:pt-[8rem]  text-second-gray  text-syellow bg-clip-text bg-gradient-to-b from-gray-600 to-[#4187BF] mix-blend-light">Chân dung khách hàng mang lại cho bạn quyết định về mặt thiết kế UI - UX


                            </h1>

                            <div class="md:hidden md:basis-1/2 text-center 1flex 1max-h-[375px] mvs-h-screen max-h-[50vh] sm:max-h-[200px] bg-pattem">
            
                            <!-- <video-background
                                class="bg-pattem 1absolute mix-blend-light1 mix-blend-bg max-h-[30vh] 1max-h-[200px] mobile" 
                                src="/images/bong.mp4"                    
                                style="1max-height: 200px; height: 100vh;"
                                overlay="rgba(37, 36, 34, var(--tw-bg-opacity))" 

                            >

                            </video-background> -->
                            <video
                                class="bg-pattem mix-blend-light1 mix-blend-bg max-h-[30vh] 1max-h-[200px] mobile" 
                                overlay="rgba(37, 36, 34, var(--tw-bg-opacity))" 
                                autoplay loop="loop" muted="muted" 
                            >
                                <source src="/images/bong.mp4" type="video/mp4">

                            </video>


                            </div>

                        </div>
                        <div class="absolute hidden md:basis-1/2  md:block mvs-h-screen 1mvs-max-h-screen  relative mt-[7rem] max-h-[400px] min-h-[400px] bg-pattem" >
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
                           <HomeBannerCta />

            </section>

       

       
        </div>
</template>

<script>

export default {
    // name: 'HomeBanner',

}
</script>
