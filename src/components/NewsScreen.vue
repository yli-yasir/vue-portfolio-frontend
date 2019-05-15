<template>
  <loading-screen endpoint="/api/news">
    <template v-slot:default="slotProps">
      <div
        class="my-3 p-3 shadow news-container bg-dark rounded d-inline-block"
        v-for="news in slotProps.response"
        :key="news._id"
      >
        <p>{{news.name}}</p>
        <p>{{news.description}}</p>
        <p>{{new Date(news.date)}}</p>
      </div>
    </template>
  </loading-screen>
</template>

<script>
import loadingScreen from './LoadingScreen'
export default {
    name: 'news-screen',
    components: {loadingScreen}
}
</script>