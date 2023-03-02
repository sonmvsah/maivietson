<template>
    <div class="bg-gradient-to-b from-second-600 to-white">
        
     
        <!-- Section 1 -->
        <section class="bg-pattem">
            <div class="mx-auto bg-transparent bg-pattem rounded-xl">
                <!-- <HomeProducts /> -->
                <AboutTrustme />
                <AboutTimelineItem />
                <!-- <AboutUs /> -->

                
            </div>
        </section>

        </div>
</template>

<script>
export default {
    name: 'About',
    layout: 'about',
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