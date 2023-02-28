<template>
    <div>
        <HomeBanner />
        <HomeTrustme />

        <HomeTable />
        <!-- <HomeAboutme /> -->
    </div>
</template>

<script>
export default {
    name: 'Home',
    layout: 'home',
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