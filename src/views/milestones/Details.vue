<template>
  <loader class="container-fluid" :endpoint=" '/api/milestones/' + id ">
    <template v-slot:content="{responseData}">
      <div class="detailsContainer mx-auto">
        <manage-bar v-if="$store.state.isLoggedIn" path="/milestones" :id="id"></manage-bar>

        <h1 class="text-center">{{responseData.name}}</h1>
        <div class="d-flex flex-row-reverse">
          <small>
            Posted: {{new Date(responseData.createdAt).toLocaleString('en-GB')}}
            &nbsp;&nbsp;&nbsp;&nbsp;
            Last Edit: {{new Date(responseData.updatedAt).toLocaleString('en-GB')}}</small>
        </div>
        <p class="mt-4">{{responseData.description}}</p>
      </div>
    </template>
  </loader>
</template>

 <script>
import loader from "@/components/Loader";
import manageBar from "@/components/ManagePostBar";

export default {
  props: { id: String },
  components: { loader, manageBar }
};
</script>