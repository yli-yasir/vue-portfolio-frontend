<template>
  <a href="#" :class="{skeleton: isSkeleton}" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{heading}}</h5>
      <small>{{date}}</small>
    </div>
    <p class="mb-1">{{description}}</p>
    <small>{{footer}}</small>
  </a>
</template>

<script>
import skeleton from '@/mixins/Skeleton'

export default {
    mixins: [skeleton],
    props:{
        baseRouteToItem: String,
        heading: String,
        date: String,
        description: String,
        footer: String
    }
}
</script>

<style lang="scss" scoped>

$skeleton-bg : rgba(black,0.1);

.list-group-item{
    &:nth-child(2){
    background-color: var(--primary);
    color: white;
  }
}
.skeleton{

  * {
    border-radius: 10px;
  }
    h5 {
        width: 30px;
        height: 10px;
        background-color: $skeleton-bg;
    }
    p {
      width: 100%;
      height: 20px;
      background-color: $skeleton-bg;
    }
}
</style>
