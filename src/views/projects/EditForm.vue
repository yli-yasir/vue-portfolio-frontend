<template>
  <loader class="container" :endpoint="'/api/projects/' + id">
    <template v-slot:content="{responseData}">
      <!-- the responseData is intially null until the loader fetches data
      so we don't render the form until the data is avaialable (quick and dirty
      solution)-->
      <template v-if="responseData">
      <h1 class="mb-4">Editing Project: {{responseData.name}}</h1>
      <project-form
        :action="'/api/projects/' + id"
        method="put"
        :name="responseData.name"
        :thumbnailUrl="responseData.thumbnailUrl"
        :youtubeEmbed="responseData.youtubeEmbed"
        :description="responseData.description"
        :imgUrls="responseData.imgUrls"
        :contributors="responseData.contributors"
      ></project-form>
      </template>
    </template>
  </loader>
</template>

<script>
import loader from "@/components/Loader";
import projectForm from "@/views/projects/Form";
export default {
  data: function() {
    return {};
  },
  props: {
    //the id of the project we are editing
    id: String
  },
  components: { loader, projectForm }
};
</script>