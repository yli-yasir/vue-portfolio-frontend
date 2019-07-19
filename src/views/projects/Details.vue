<template>
  <loader class="container-fluid" :endpoint=" '/api/projects/' + id ">
    <!-- desctructuring will be used on the slopProps below for cleaner code-->
    <template v-slot:content="{responseData}">
      <div class="detailsContainer mx-auto mb-4">
        <h1 class="text-center">{{responseData.name}}</h1>
        <!--
        <control-bar v-if="isLoggedIn" basePath="/projects" :id="id"></control-bar>
        -->
        <youtube-embed v-if="responseData.youtubeEmbed" :embed-url="responseData.youtubeEmbed"></youtube-embed>
        <carousel v-if="responseData.imgUrls" class="mt-4" :img-urls="responseData.imgUrls"></carousel>
        <p class="mt-2">{{responseData.description}}</p>
      </div>
    </template>
  </loader>
</template>

<script>
import loader from "@/components/Loader";
import youtubeEmbed from "@/components/YoutubeEmbed";
import carousel from "@/components/Carousel";
import controlBar from "@/components/ControlBar"

export default {
  props: { id: String },
  components: { loader, controlBar, youtubeEmbed, carousel }
};
</script>
