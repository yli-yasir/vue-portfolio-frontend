<template>
  <loader endpoint="/api/members">
    <template v-slot:content="slotProps">
      <!--
      <div v-if="isLoggedIn" class="d-flex flex-row-reverse">
        <router-link :to="{name: 'newMember'}" class="btn btn-primary mr-4">New Member</router-link>
      </div>
      -->
      <div class="index">
      <card
        :isSkeleton="slotProps.isLoading"
        v-for="item in slotProps.response"
        :key="item._id"
        :name="item.name"
        :thumbnailUrl="item.thumbnailUrl"
        :description="item.description"
        :url="'/members/' + item._id"
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
export default {
  name: "index-screen",
  components: {
    card,
    loader
  }};
</script>
