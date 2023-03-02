<template>
    <div class="flex flex-col justify-center content-center expand my-auto 1pt-[20rem] 1md:pt-[20rem] max-h-screen">
       <h2 class="text-center my-auto pt-20 md:pt-[20rem]  font-black text-7xl md:text-20xl text-second-600 leading-[6rem]	">DUYÊN KHỞI TỪ ĐÂY</h2>
       <p class="text-center font-bold text-2xl md:text-5xl text-second-600 1leading-[6rem]">Nếu bạn đang tìm kiếm niềm vui hay ý nghĩa của cuộc sống thì tôi có thể giới thiệu</p>

       <div>







       </div>
    </div>

</template>

<script>
import { 
    initAccordions, 
    initCarousels, 
    initCollapses, 
    initDials, 
    initDismisses, 
    initDrawers, 
    initDropdowns, 
    initModals, 
    initPopovers, 
    initTabs, 
    initTooltips } from 'flowbite'
export default {
    mounted: function() {
    initAccordions();
    initCarousels();
    initCollapses();
    initDials();
    initDismisses();
    initDrawers();
    initDropdowns();
    initModals();
    initPopovers();
    initTabs();
    initTooltips();
}
}
</script>

<style>

</style>