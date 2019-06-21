<template>
  <loader endpoint="/api/members" class="index">
    <template v-slot:content="slotProps">
      <card
        :isSkeleton="slotProps.isLoading"
        v-for="item in slotProps.response"
        :key="item._id"
        :name="item.name"
        :thumbnailUrl="item.thumbnailUrl"
        :description="item.description"
        :url="/members/ + item._id"
      ></card>
    </template>

    <template v-slot:loading="slotProps">
      <card
        :isSkeleton="true"
        v-for="(one,index) in 4"
        :key="one + index"
      ></card>
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
  }
};
</script>
