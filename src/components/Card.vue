<template>
  <div :class="{skeleton:isSkeleton}" class="card bg-light m-3">
    <img v-if="!isSkeleton" :src="thumbnailUrl" class="card-img-top" alt="thumbnail">
    <div v-else class="card-img-top skeleton" id="imgSkeleton"></div>
    <div class="card-body">
      <div class="card-text">
        <h3 class="card-title">{{name}}</h3>
        <p>{{description}}</p>
      </div>
      <template v-if="!isSkeleton">
      <router-link  :to="url" class="btn card-btn btn-primary">More</router-link>
      <router-link v-if="secondaryUrl" :to="secondaryUrl" class=" ml-4 btn card-btn btn-warning">{{secondaryUrlLabel}}</router-link>
      </template>
      <div v-else class="skeleton" id="btnSkeleton"></div>
    </div>
  </div>
</template>

<script>
import skeleton from "@/mixins/Skeleton";
export default {
  mixins: [skeleton],
  props: {
    thumbnailUrl: String,
    name: String,
    description: String,
    url: String,
    secondaryUrl: String,
    secondaryUrlLabel: String
  }
};
</script>

<style lang="scss" scoped>

$skeleton-bg : rgba(black,0.1);

.card {
  border: 0px;
  width: 18rem;

  .card-text {
    max-height: 150px;
    height: 150px;
    overflow: auto;
  }

  .card-btn {
    margin-top: 1rem;
  }

  .card-img-top {
    height: 170px;
    max-height: 170px;
  }

  &.skeleton{
    padding:10px;
  }

  .skeleton{
    background-color: $skeleton-bg;
    border-radius: 10px;

  }
    #imgSkeleton
  {
    margin: auto;
  }

  #btnSkeleton{
    height:25px;
    width:50px;

  }

}
</style>