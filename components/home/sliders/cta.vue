<template>
    <section class="bg-transparent flex flex-row justify-around mt-10 md:mt-20">
        <div>
            <h2 class="text-white text-4xl">Tìm hiểu thêm chút về tôi nhé !</h2>
        </div>

        <div class="pb-20">
              <Nuxt-link 
                to="/about"
                class="flex flex-row justify-center space-x-5 my-auto"
              >
                <img class="backdrop-grayscale	 animate-pulse duration-100 delay-1000	ease-in-out" src="/images/icons-svg/icon-arr-white.svg" />
                
                <span class="text-2xl text-white text-center font-base mt-2">BẮT ĐẦU !</span> 
                
                
              </Nuxt-link>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>