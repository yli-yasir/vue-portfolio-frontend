<!-- basic card component 
note: once the skeleton class is applied, a skeleton of the card will render instead
in skeleton mode, a div with random height this is to give a more realistic representation
of what the user should expect of what will be rendered instead of the img, it's also
the StaggeredCards component requires the cards to be of variable length to display
the columns properly-->
<template>
<div :class="{skeleton: isSkeleton}" class="card">
  <img v-if="!isSkeleton" :src="thumbnailUrl" class="card-img-top" alt="thumbnail">
  <div v-else class="card-img-top" :style="'height:' + random(100,500) + 'px'"></div>
  <div class="card-body">
    <h5 class="card-title">{{title}}</h5>
    <p class="card-text">{{text}}</p>
    <router-link v-if="!isSkeleton" :to="!url ? '#' : url" class="btn btn-primary">More</router-link>
    <div v-else id="btnSkeleton"></div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    thumbnailUrl: String,
    title: String,
    text: String,
    url: String,
  },
  computed: {
    isSkeleton(){
      return !this.thumbnailUrl && !this.title && !this.text && !this.url;
    }
  },
  methods: {
    random(min,max){
      return Math.floor(Math.random() * (max-min) + min)
    }
  }
};
</script>

<style lang="scss" scoped>

$skeleton-bg : rgba(black,0.1);


.skeleton {
  .card-img-top {
    background-color: $skeleton-bg;
  }
  #btnSkeleton{
    height:25px;
    width:50px;
    background-color: $skeleton-bg;
    border-radius: 10px;
  }
}
</style>