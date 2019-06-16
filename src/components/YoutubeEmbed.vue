<template>
  <div class="embed-responsive embed-responsive-16by9 mb-2">
    <iframe
      class="aspect-ratio-child"
      :src="embedUrl"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {props: {embedUrl : String} };
</script>

<style lang="scss" scoped>
 iframe {
   background-color: rgba(black,0.1)
 }
</style>