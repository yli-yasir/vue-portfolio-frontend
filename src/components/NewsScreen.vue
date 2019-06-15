<template>
  <loading-screen endpoint="/api/news">
    <template v-slot:default="slotProps">
      <div
        class="container-fluid"
        v-for="news in slotProps.response"
        :key="news._id"
      >

      <div class="my-4 card bg-light">
  <div class="card-header">{{new Date(news.date)}}</div>
  <div class="card-body">
    <h4 class="card-title">{{news.name}}</h4>
    <p class="card-text">{{news.description}}</p>
  </div>
</div>

      </div>
    </template>
  </loading-screen>
</template>

<script>
import loader from '@/mixins/Loader'
export default {
    name: 'news-screen',
    mixins: {loader}
}
</script>