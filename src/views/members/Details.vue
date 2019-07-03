<template>
  <loader class="container-fluid" :endpoint=" '/api/members/' + id ">
    <template v-slot:content="slotProps">
      <div class="detailsContainer mx-auto">
        <h1 class="text-center">{{slotProps.response.name}}</h1>
        <control-bar v-if="isLoggedIn" basePath="/members" :id="id"></control-bar>
        <p class="mt-4">{{slotProps.response.description}}</p>
      </div>
    </template>
  </loader>
</template>

 <script>
import loader from "@/components/Loader";
import loggedIn from '@/mixins/LoggedIn'
import controlBar from '@/components/ControlBar';
export default {
  mixins: [loggedIn],
  props: { id: String },
  components: { loader,controlBar }
};
</script>