<script>
import loadingScreen from '@/components/LoadingScreen'
import projectForm from './EmptyProjectForm'
export default {
  props: ["endpoint","projectId"],
  components: {loadingScreen,projectForm}
}
</script>

<template><loading-screen class="container" :endpoint="endpoint">
<template v-slot:default="slotProps">
<project-form 
method="post"
:action="'/api/projects/' + projectId + '?_method=PUT' "
:path-dataset="slotProps.response._id"
:name-dataset="slotProps.response.name"
:thumbnail-url-dataset="slotProps.response.thumbnailUrl"
:short-description-dataset="slotProps.response.shortDescription"
:description-dataset="slotProps.response.description"
:youtube-embed-dataset="slotProps.response.youtubeEmbed"
:img-urls-dataset="slotProps.response.imgUrls" 
:contributors-dataset="slotProps.response.contributors" 
:links-dataset="slotProps.response.links"></project-form>
</template>
</loading-screen></template>