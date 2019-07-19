<template>
  <loader class="container-fluid" :endpoint=" '/api/articles/' + id ">
    <template v-slot:content="slotProps">
      <div class="detailsContainer mx-auto">
        <h1 class="text-center">{{slotProps.responseData.name}}</h1>
        <!--
        <control-bar v-if="isLoggedIn" basePath="/members" :id="id"></control-bar>
        -->
        <p class="mt-4">{{slotProps.responseData.description}}</p>
      </div>
    </template>
  </loader>
</template>

 <script>
import loader from "@/components/Loader";
import controlBar from '@/components/ControlBar';

export default {
  props: { id: String },
  components: { loader,controlBar }
};
</script>