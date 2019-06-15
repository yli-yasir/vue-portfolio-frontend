<template>
  <a href="#" class="skeleton list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{heading}}</h5>
      <small>{{date}}</small>
    </div>
    <p class="mb-1">{{description}}</p>
    <small>{{footer}}</small>
  </a>
</template>

<script>
export default {
    props:{
        skeleton: Boolean,
        baseRouteToItem: String,
        heading: String,
        date: String,
        description: String,
        footer: String
    }
}
</script>

<style lang="scss" scoped>
.skeleton{
    h5 {
        width: 30px;
        background-color: black;
    }
}
</style>
