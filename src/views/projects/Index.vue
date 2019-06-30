<template>
  <loader endpoint="/api/projects">
    <template v-slot:content="slotProps">
      <div v-if="isLoggedIn" class="d-flex flex-row-reverse">
        <router-link :to="{name: 'newProject'}" class="btn btn-primary mr-4">New Project</router-link>
      </div>
      <div class="index">
        <card
          v-for="item in slotProps.response"
          :key="item._id"
          :name="item.name"
          :thumbnailUrl="item.thumbnailUrl"
          :description="item.description"
          :url="'/projects/' + item._id"
          :secondaryUrl=" isLoggedIn ? '/projects/' + item._id +'/edit' : '' "
          secondaryUrlLabel="Edit"
        ></card>
      </div>
    </template>

    <template v-slot:loading="slotProps">
      <div class="index">
      <card :isSkeleton="true" v-for="(one,index) in 4" :key="one + index"></card>
      </div>
    </template>
  </loader>
</template>

<script>
import card from "@/components/Card";
import loader from "@/components/Loader";
import loggedIn from "@/mixins/LoggedIn";
export default {
  name: "index-screen",
  components: {
    card,
    loader
  },
  mixins: [loggedIn]
};
</script>
