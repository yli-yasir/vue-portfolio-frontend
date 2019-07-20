<template>
  <loader class="container-fluid" :endpoint=" '/api/articles/' + id ">
    <template v-slot:content="slotProps">
      <div class="detailsContainer mx-auto">
        <h1 class="text-center">{{slotProps.responseData.name}}</h1>
        <manage-bar v-if="$store.state.isLoggedIn" path="/articles" :id="id"></manage-bar>

        <p class="mt-4">{{slotProps.responseData.description}}</p>
      </div>
    </template>
  </loader>
</template>

 <script>
import loader from "@/components/Loader";
import manageBar from '@/components/ManagePostBar';

export default {
  props: { id: String },
  components: { loader,manageBar }
};
</script>