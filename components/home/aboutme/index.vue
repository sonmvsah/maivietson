<template>
  <div class="1bg-pattem">
      
    <!-- Section 1 -->
    <section class="relative mvs-h-screen bg-transparent  px-5 pt-20 md:px-32">
        <div class="mx-auto">
            <h1 class="text-3xl text-second-600 text-center font-extrabold">
            Sẵn sàng tối ưu UX - UI của website ?
            </h1>
            <p class="text-lg text-second-gray text-center">Theo dõi ngay các bước dưới đây...</p>
        </div>
        <div class="pt-20">
           <div class="flex flex-col md:flex-row mx-auto text-center ">
            <div class="mx-auto text-center basis-1/2 border-r border-b border-second-gray  min-h-[200px]">
            <HomeTableItem />
            </div>
            <div class="mx-auto text-center basis-1/2 border-b border-second-gray min-h-[200px]">
            <HomeTableItem />
            </div>
            </div>
        <div class="flex flex-col md:flex-row mx-auto text-center">
            <div class="mx-auto text-center basis-1/2 border-r border-second-gray min-h-[200px]">
            <HomeTableItem />
            </div>
            <div class="mx-auto text-center basis-1/2 min-h-[200px]">
            <HomeTableItem />
            </div>
        </div>
        </div>
       
        
    </section>



  </div>
</template>

<script>

export default {
    // name: 'HomeTable',
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