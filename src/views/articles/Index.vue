<template>
  <loader class="container" endpoint="/api/articles">
    <template v-slot:content="slotProps">
        <staggered-cards :dataset="articlesToCards(slotProps.responseData)"></staggered-cards>
    </template>
  </loader>
</template>

<script>
import loader from "@/components/Loader";
import staggeredCards from '@/components/StaggeredCards'
import {random} from '@/utils/common'

export default {
  name: "index-screen",
  components: {
    staggeredCards,
    loader
  },
  methods: {
    //convert the articles to objects which implement the card interface so they can
    //be rendered properly by StaggeredCards component (see StaggeredCards.vue)
    articlesToCards(articles){
      if (articles){
      return articles.map((article)=>{
        return {
          thumbnailUrl: article.thumbnailUrl,
          title: article.name,
          text: article.description?
          article.description.substring(0,random(100,700)) + '...' :
          '',
          url: `/articles/${article._id}`,
          key: article._id
        }
      })
      }
    }
  }};
</script>
