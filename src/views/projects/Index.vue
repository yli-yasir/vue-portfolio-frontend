<template>
  <loader class="container" endpoint="/api/projects">
    <template v-slot:content="slotProps">
      <staggered-cards :dataset="projectsToCards(slotProps.responseData)"></staggered-cards>
    </template>
  </loader>
</template>

<script>
import loader from "@/components/Loader";
import staggeredCards from '@/components/StaggeredCards'
import {random} from '@/utils/common'

export default {
  components: {
    loader,
    staggeredCards
  },
  methods: {
    //convert each project in the dataset we have into a card object which fits 
    //the staggeredCards item requirements (see StaggeredCards.vue for more info)
    projectsToCards(projects){
      if (projects){
      return projects.map((project)=>{
        return {
          key: project._id,
          thumbnailUrl: project.thumbnailUrl,
          title: project.name,
          text: project.description.substring(0,random(100,700)) + '...',
          url: `/projects/${project._id}`
        }
      })
    }
    }
  }
};
</script>
