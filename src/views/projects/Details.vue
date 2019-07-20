<template>
  <loader class="container-fluid" :endpoint=" '/api/projects/' + id ">
    <!-- desctructuring will be used on the slopProps below for cleaner code-->
    <template v-slot:content="{responseData}">
      <div class="detailsContainer mx-auto mb-4">
        <h1 class="text-center">{{responseData.name}}</h1>
        <!--manage post bar-->
        <manage-bar v-if="$store.state.isLoggedIn" path="/projects" :id="id"></manage-bar>
       
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
import manageBar from "@/components/ManagePostBar"

export default {
  props: { id: String },
  components: { loader, manageBar, youtubeEmbed, carousel }
};
</script>
