<template>
  <loader class="container-fluid" :endpoint=" '/api/news/' + id ">
    <template v-slot:content="slotProps">
      <div class="detailsContainer mx-auto">
        <!--
        <control-bar v-if="isLoggedIn" basePath="/news" :id="id"></control-bar>
        -->
        <h1 class="text-center">{{slotProps.response.name}}</h1>
        <div class="d-flex flex-row-reverse">
          <small>
            Posted: {{new Date(slotProps.response.createdAt).toLocaleString('en-GB')}}
            &nbsp;&nbsp;&nbsp;&nbsp;
            Last Edit: {{new Date(slotProps.response.updatedAt).toLocaleString('en-GB')}}</small>
        </div>
        <p class="mt-4">{{slotProps.response.description}}</p>
      </div>
    </template>
  </loader>
</template>

 <script>
import loader from "@/components/Loader";
import controlBar from "@/components/ControlBar";

export default {
  props: { id: String },
  components: { loader, controlBar }
};
</script>