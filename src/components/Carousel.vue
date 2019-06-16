<script>
export default { name: "carousel", props: ["imgUrls"] };
</script>

<template>
  <div class="embed-responsive embed-responsive-16by9 mb-2">
    <div id="carouselControls" class="carousel slide aspect-ratio-child" data-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(imgUrl,index) in imgUrls" :key="imgUrl + index" class="carousel-item" :class="{ active : index==0 }">
          <img :src="imgUrl" alt="screenshot">
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>


<style lang="scss" scoped>

.aspect-ratio-child {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}

.carousel-inner,.carousel-item,.carousel-item *{
  height:100%;
  width:100%;}

.carousel-item * {
  object-fit: contain;
}

</style>


