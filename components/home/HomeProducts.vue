<template>
  <div class="px-5 mt-10 md:px-32">
      

    <!-- Section 1 -->
    <section class="relative w-full bg-white">
        <div class="absolute w-full h-32 bg-gradient-to-b from-gray-100 to-white rounded-xl"></div>
        <div class="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl ">
            <h1 class="mb-1 text-4xl font-extrabold leading-none text-gray-900 lg:text-5xl xl:text-6xl sm:mb-3"><a href="#_">Sự Thật Cuộc Bức Hại</a></h1>
            <p class="text-lg font-medium text-gray-500 sm:text-2xl">Hơn 20 năm bị bức hại, Người tập Pháp Luân Công không những không giảm mà còn tăng nhanh và phổ biến rộng khắp thế giới, không nơi nào không biết đến.</p>

                    <div class="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">

                        <!-- <div class="flex grid grid-cols-12 pb-10 sm:px-5 md:gap-x-8 gap-y-16"> -->
                             
                             
                            <Transition-group
                                    appear
                                    tag="div"
                                    class="flex grid grid-cols-12 pb-10 sm:px-5 md:gap-x-8 gap-y-16"
                                    name="custom-classes"
                                    enter-active-class="animate__animated animate__backInUp"
                                    leave-active-class="animate__animated animate__bounceOutRight"
                                > 
                                <div                           
                                    v-for="post in posts"
                                    :key="post.id"
                                    class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4"
                                >
                                    <NuxtLink :to="post.slug" class="block">
                                        <img class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 transition-all hover:scale-105 hover:transition-all hover:ease-linear hover:cursor-pointer" :src="post._embedded['wp:featuredmedia']['0'].source_url">
                                    </NuxtLink>
                                    <div class="bg-purple-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block ">
                                        <span 
                                          
                                          v-for="(cat,index) in post.categories" :key="index"
                                          class="m-2"
                                          > {{cat}}</span>
                                    </div>
                                    <h2 class="text-lg font-bold sm:text-xl md:text-2xl">
                                      <NuxtLink 
                                      v-dompurify-html="post.title.rendered"
                                      :to="post.slug" 
                                      ></NuxtLink>
                                      </h2>
                                      <!-- eslint-disable vue/no-v-html -->

                                    <p 
                                    v-dompurify-html="post.excerpt.rendered"
                                    class="text-sm text-gray-500"
                                    ></p>
                                        <!--eslint-enable-->


                                    <p class="pt-2 text-xs font-medium"><a href="#_" class="mr-1 underline" v-dompurify-html="post._embedded.author['0'].name">Mary Jane</a> · <span class="mx-1">April 17, 2021</span> · <span class="mx-1 text-gray-600">3 min. read</span></p>
                                </div>

                        </Transition-group>

                        <!-- </div> -->
                    </div>

        </div>
    </section>



  </div>
</template>

<script>

export default {
    name: 'HomeProducts',
   data() {
      return {
        posts: []
      }
    },
    // activated() {
    //   // Call fetch again if last fetch more than 30 sec ago
    //   if (this.$fetchState.timestamp <= Date.now() - 30000) {
    //     this.$fetch()
    //   }
    // },
    async fetch() {
      this.posts = await fetch('https://tapchitrithuc.com/wp-json/wp/v2/posts?_embed').then(res =>
        res.json()
      )

    },




}
</script>

<style>
   @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

</style>