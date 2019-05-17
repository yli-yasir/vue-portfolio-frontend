<script>
import loadingScreen from '@/components/LoadingScreen'
import youtubeEmbed from '@/components/YoutubeEmbed'
import carousel from '@/components/Carousel'

export default {
  props: ["endpoint"],
  components: {loadingScreen,youtubeEmbed,carousel}
};
</script>
<template>
  <loading-screen class="container-fluid" :endpoint="endpoint">
    <template v-slot:default="slotProps">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md">
          <youtube-embed :embed-url="slotProps.response.youtubeEmbed"></youtube-embed>
          <carousel :img-urls="slotProps.response.imgUrls"></carousel>
          <p>{{slotProps.response.description}}</p>
          <p v-for="item in slotProps.response.links">{{item.label}} : {{item.url}}</p>
          <p v-for="contrib in slotProps.response.contributors">{{contrib.name}} : {{contrib.role}}</p>
        </div>
        <div class="col-md-2"></div>
      </div>
    </template>
  </loading-screen>
</template>