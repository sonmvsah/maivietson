<template>
  <div class="px-5 mt-10 md:px-32">
      
    <!-- Section 1 -->
    <section class="px-0 py-12 bg-white md:px-0">
    <div class="container items-center max-w-6xl px-8 mx-auto xl:px-2">
        <div class="flex flex-wrap items-center sm:-mx-3">
        <div class="w-full md:w-1/2">
        <!-- <Transition
                :css="false"
                appear
                @before-enter="onBeforeEnter"
                @enter="onEnter"
                @leave="onLeave"
              >  -->
               <Transition
               appear
                name="custom-classes"
                enter-active-class="animate__animated animate__lightSpeedInLeft"
                leave-active-class="animate__animated animate__bounceOutRight"
              > 
            <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <!-- <Transition
                :css="false"
                appear
                @before-enter="onBeforeEnter"
                @enter="onEnter"
                @leave="onLeave"
              >   -->
                    <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                        <span class="block xl:inline">Pháp Luân Công</span>
                        <span class="block text-plc-primary mt-5 xl:inline">Chân Thiện Nhẫn</span>
                    </h1>
                
            <p class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Còn gọi là Pháp Luân Đại Pháp, môn tu luyện cổ xưa bồi dưỡng và nâng cao tâm tính, sức khỏe.</p>
            <div class="relative flex flex-col sm:flex-row sm:space-x-4">
                
                <NuxtLink to="/about" class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-plc-primary rounded-md sm:mb-0 hover:bg-teal-700 sm:w-auto">
                Tìm hiểu thêm
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </NuxtLink>
  
                <a href="#_" class="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                Tài Liệu Gốc
                </a>
            </div>
            </div>
            </Transition>
        </div>
        <div class="w-full md:w-1/2">

            <Transition
                name="mvs-tada"
                :css="false"
                appear
                @before-enter="onBeforeEnter"
                @enter="onEnter"
                @leave="onLeave"
              > 
            <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <img src="https://suthatphapluancong.org/wp-content/uploads/2018/09/mat-trai-cua-phap-luan-cong.jpg">
            </div>
            </Transition>

        </div>
        </div>
    </div>
    </section>




  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
    name: 'HomeSlider',
   data() {
      return {
        posts: []
      }
    },
   
    methods: {
      onBeforeEnter,
      onEnter,
      onLeave
    }
    
}



function onBeforeEnter(el) {
  gsap.set(el, {
    scaleX: 0.25,
    scaleY: 0.25,
    opacity: 0
  })
}
  
function onEnter(el, done) {
  gsap.to(el, {
    duration: 1,
    scaleX: 1,
    scaleY: 1,
    opacity: 0.6,
    ease: 'back.out(2.5, 1)',
    onComplete: done
  })
  gsap.to(el, {
      duration: 1,
      translateY: 100,
      opacity: 1,
      delay: 1.5,
      ease: 'back.out(10,1)',
      onComplete: done
  })
   gsap.to(el, {
      duration: 1,
      translateY: 0,
      opacity: 1,
      delay: 2.5,
      ease: 'back.out(10,1)',
      onComplete: done
  })
}

function onLeave(el, done) {
	gsap.to(el, {
    duration: 0.7,
    scaleX: 1,
    scaleY: 1,
    x: 300,
    ease: 'elastic.inOut(2.5, 1)'
  })
  gsap.to(el, {
    duration: 0.2,
    delay: 0.5,
    opacity: 0,
    onComplete: done
  })

}





</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}



</style>