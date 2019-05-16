<template>
  <div class="card m-3 m-rounded m-bg-secondary shadow">
    <img :src="thumbnailUrl" class="card-img-top m-rounded-top p-1" alt="thumbnail">

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
.card {
  border: 0px;
  width: 18rem;
}

.card-text{
  max-height:150px;
  height:150px;
  overflow: auto;
}

.card-btn{
  margin-top:1rem;
}

.card-img-top{
  height:170px;
  max-height:170px;
}
</style>