<template>
  <div class="card m-3 rounded bg-dark shadow">
    <img :src="thumbnailUrl" class="card-img-top rounded-top p-1" alt="thumbnail">

    <div class="card-body">
      <div class="card-text">
        <h5 class="card-title">{{name}}</h5>
        <p>{{shortDescription}}</p>
      </div>

      <router-link :to="url" class="btn card-btn btn-success rounded">More Details</router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'card',
      props: ["thumbnailUrl", "shortDescription", "name", "url"]

}
</script>

<style scoped>
</style>