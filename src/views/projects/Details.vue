<template>
  <loader class="container-fluid" :endpoint=" '/api/projects/' + id " >
    <template v-slot:content="slotProps">
          <div class="detailsContainer mx-auto">
          <youtube-embed :embed-url="slotProps.response.youtubeEmbed"></youtube-embed>
          <carousel class="mt-4" :img-urls="slotProps.response.imgUrls"></carousel>
          <p class="mt-4">{{slotProps.response.description}}</p>
          <p v-for="contrib in slotProps.response.contributors" :key="contrib._id">{{contrib.name}} : {{contrib.role}}</p>
          </div>
    </template>
  </loader>
</template>

<script>
import loader from '@/components/Loader'
import youtubeEmbed from '@/components/YoutubeEmbed'
import carousel from '@/components/Carousel'

export default {
  props: {id:String},
  components: {loader,youtubeEmbed,carousel}
};
</script>


<style scoped>

</style>