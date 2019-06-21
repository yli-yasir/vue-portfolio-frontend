<template>
<loader class="container" :endpoint="'/api/projects/' + id">
<template v-slot:content="slotProps">
  <h1 class="mb-4">Editing Project: {{slotProps.response.name}}</h1>
  <project-form 
  :action="'/api/projects/' + id + '?_method=PUT'"
  :name="slotProps.response.name"
  :thumbnailUrl="slotProps.response.thumbnailUrl"
  :youtubeEmbed="slotProps.response.youtubeEmbed"
  :description="slotProps.response.description"
  :imgUrls="slotProps.response.imgUrls"
  :contributors="slotProps.response.contributors" >
  </project-form>
</template>
</loader>
</template>


<script>
import loader from '@/components/Loader'
import projectForm from '@/views/projects/Form'
export default {
  data: function(){
    return {}
  },
  props: {
    //the id of the project we are editing
    id: String,

    },
  components: {loader,projectForm},
 
}</script>