<template>
  <div class="px-5 md:px-20 flex flex-col justify-center min-h-[200px] expand space-y-3">
      <h3 class="text-2xl font-semibold text-second-600"> {{ title }}</h3>
      <p class="text-[1.15rem] text-gray-700">{{ summary }}</p>
      <!-- <p class="text-gray-400 ">( {{ fall }} ) </p> -->
      <Nuxt-link
                class="my-auto mx-auto cursor-pointer mt-[1rem] px-20 py-3 1text-base bg-transparent text-second-600 rounded-md shadow-sm border border-1 border-second-600" 
                :to="linkto"
                tag="a"

            >
            {{ but_title }}
            </Nuxt-link>
  </div>
</template>

<script>
export default {
    props: {
      title: String,
      summary: String,
      but_title: String,
      fall: String,
      linkto: String,
     }

}
</script>

<style>

</style>