<template>
  <div class="card bg-light m-3">
    <img :src="cardable.thumbnailUrl" class="card-img-top" alt="thumbnail">
    <div class="card-body">
      <div class="card-text">
        <h3 class="card-title">{{cardable.name}}</h3>
        <p>{{cardable.description}}</p>
      </div>
      <router-link :to="url" class="btn card-btn btn-primary">More</router-link>
    </div>
  </div>
</template>

<script>
export default {
      props: {cardable: Object, url: String}

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