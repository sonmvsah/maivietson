<template>
    <div class="px-5 mt-10 md:px-32" v-html="post.content.rendered">
        
    </div>
</template>

<script>
export default {
    layout: 'post',
    data() {
        return {
            content: ''
        }
    },
     
    asyncData({ $axios, params, error }) {
    console.log('asyncData post single', params)

    if (!params.post) {
      const slug = params.slug
      return $axios
        .get(`https://tapchitrithuc.com/wp-json/wp/v2/posts?_embed&slug=${slug}`)
        .then((res) => {
          if (!res.data.length)
            error({ statusCode: 404, message: 'Post not found!' })
          return {
            post: res.data.length ? res.data[0] : []
          }
        })
        .catch(function(ex) {
          console.log('parsing failed', ex)
          error({ statusCode: 404, message: ex })
        })
    } else {
      return {
        post: params.post
      }
    }
  }
    
}
</script>

<style>
    /** */
</style>