<template>
  <loader class="container-fluid" :endpoint=" '/api/milestones/' + id ">
    <template v-slot:content="{responseData}">
      <div class="detailsContainer mx-auto">
        <h1 class="text-center">{{responseData.name}}</h1>

          <date-bar
          :originDate="new Date(responseData.originDate).toLocaleString('en-GB')"
          :createdAt="new Date(responseData.createdAt).toLocaleString('en-GB')"
          :updatedAt="new Date(responseData.updatedAt).toLocaleString('en-GB')">
          </date-bar>

          <manage-bar class="mt-2" v-if="$store.state.isLoggedIn" path="/milestones" :id="id"></manage-bar>

        <p class="mt-4">{{responseData.description}}</p>
      </div>
    </template>
  </loader>
</template>

 <script>
import loader from "@/components/Loader";
import manageBar from "@/components/ManagePostBar";
import dateBar from '@/components/DateBar'

export default {
  props: { id: String },
  components: { loader, manageBar,dateBar }
};
</script>