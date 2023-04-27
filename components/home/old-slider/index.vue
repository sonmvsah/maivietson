<template>
        <div class="bg-gradient-to-b from-second-600 to-sblack mvs-h-screen mvs-max-h-screen">
            <div class="container flex flex-col mx-auto justify-between mvs-h-screen 1mvs-max-h-screen my-auto">
                <div class="relative my-auto">
                    <section class="container grid grid-cols-12 items-center mx-auto md:px-[2.5rem]">
                            <div class="col-span-12 md:col-span-6 order-1">
                                <h1 class="mb-1 mb-text-stroke lg:text-stroke text-center text-[3.6rem] mt-[7vh] md:mt-0 1text-4xl 1text-[1.93rem] font-extrabold leading-none text-white lg:text-7xl xl:text-7xl sm:mb-3 text-second-gray  text-syellow bg-clip-text bg-gradient-to-b from-gray-600 to-[#4187BF] mix-blend-bg  stroke-slate-50  md:leading-6 lg:leading-[1.2em] xl:leading-[1.2em] z-10">TRẢI NGHIỆM  <br> #1 CHIẾC <br>WEB LẠ !</h1>
                            </div>

                            <div class="col-span-12 md:col-span-6 order-2 absolute md:relative 1w-full 1right-0 z-0 mix-blend-bg mix-blend-light">
                                <video
                                        class="bg-pattem mix-blend-bg mix-blend-light max-h-[50vh] 1max-h-[200px] mobile bg-pattem z-0" 
                                        overlay="rgba(37, 36, 34, var(--tw-bg-opacity))" 
                                        autoplay loop="loop" muted="muted" 
                                    >
                                        <source src="/images/cua-so.mp4" type="video/mp4">

                                    </video>
                            </div>
                            <!-- <HomeSlidersCta /> -->

                    </section>
                </div>

                <div  class="px-5 flex flex-wrap items-end mb-8 lg:mb-12 ">
                    <div  class="w-full md:w-5/12">
                        <div  class="mb-3 text-gray-300 md:mb-6 caption">
                            <span  class="text-orange-600">MAIVIETSON.COM </span>
                    SỬ DỤNG
                        </div> 
                        
                        <div  class="grid h-8 grid-cols-3 select-none gap-x-10 place-items-center lg:h-12">
                            <img  src="https://1000logos.net/wp-content/uploads/2023/01/WordPress-logo.png" alt="logo spotify" height="42" width="140" data-cursor-none="" class="w-full h-auto mix-blend-screen	"> 
                            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Nuxt_logo_%282021%29.svg/2560px-Nuxt_logo_%282021%29.svg.png" alt="logo airbnb" height="43" width="140" data-cursor-none="" class="w-full h-auto mix-blend-screen	"> 
                        </div>
                    </div> 
                    
                    <div  class="mx-auto mt-8 md:mr-0 md:mt-0">
                        <Nuxt-link  to="/about" class="flex items-center text-syellow hover:text-second-600 caption">
                        <span class="flex justify-center w-8 h-8 mr-6 transform rotate-45 border border-primary hover:text-orange-500">
                            <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0xMS42MDM2IDE3LjY0NjR2LTEyLjU4MjhoMXYxMi42MjU4bDUuMDQyOS01LjA0My43MDcxLjcwNzItNS41MjE1IDUuNTIxNC4wMDA0LjAwMDMtLjcwNzEuNzA3MS0uNTE4OS0uNTE4OGgtLjAwMjl2LS4wMDNsLTUuOTU3MTItNS45NTcuNzA3MTEtLjcwNzJ6IiBmaWxsPSIjZmY2ZjAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=" alt="see more" height="30" width="30" class="transform -rotate-[135deg]"></span>
                        TÌM HIỂU THÊM
                        </Nuxt-link>
                    </div>
                </div>


            </div>
            
        </div>
</template>

<script>

export default {
    // name: 'HomeBanner',

}
</script>
