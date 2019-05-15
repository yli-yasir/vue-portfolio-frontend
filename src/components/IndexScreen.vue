<template>
<loading-screen class="container-fluid" :endpoint="endpoint">
<template v-slot:default="slotProps">
<div class="index-screen">
<card 
  v-for="item in slotProps.response" 
  :thumbnail-url="item.thumbnailUrl"
  :short-description="item.shortDescription"
  :name="item.name"
  :key="item._id"
  :url="{name: routeForSingle , params: { _id : item._id } }"
  >
  </card>
  </div>
  </template>
  </loading-screen>
</template>

<script>
import loadingScreen from './LoadingScreen';
import card from './Card';

export default {
    name:'index-screen',
    props: ["endpoint", "routeForSingle"],
    components:{
        loadingScreen, card}
}
</script>