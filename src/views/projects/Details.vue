<template>
  <loader class="container-fluid" :endpoint=" '/api/projects/' + id ">
    <template v-slot:content="slotProps">
      <div class="detailsContainer mx-auto mb-4">
        <h1 class="text-center">{{slotProps.response.name}}</h1>
        <!--
        <control-bar v-if="isLoggedIn" basePath="/projects" :id="id"></control-bar>
        -->
        <youtube-embed v-if="slotProps.response.youtubeEmbed" :embed-url="slotProps.response.youtubeEmbed"></youtube-embed>
        <carousel v-if="slotProps.response.imgUrls" class="mt-4" :img-urls="slotProps.response.imgUrls"></carousel>
        <h3 class="mt-4">About:</h3>
        <p>{{slotProps.response.description}}</p>
        <h3>Contributors:</h3>
        <p
          v-for="contrib in slotProps.response.contributors"
          :key="contrib._id"
        >{{contrib.name}} : {{contrib.role}}</p>
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
