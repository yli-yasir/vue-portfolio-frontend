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
          text: project.description.length < 150 ? project.description : project.description.substring(0,150) + '...',
          url: `/projects/${project._id}`
        }
      })
    }
    }
  }
};
</script>
