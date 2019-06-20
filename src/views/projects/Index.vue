<template>
  <loader endpoint="/api/projects" class="index">
    <template v-slot:content="slotProps">
      <card
        :isSkeleton="slotProps.isLoading"
        v-for="item in slotProps.response"
        :key="item._id"
        :name="item.name"
        :thumbnailUrl="item.thumbnailUrl"
        :description="item.description"
        :url="/projects/ + item._id"
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
  },
  props: { cardColor: String, routeForSingle: String }
};
</script>

<style scoped>
.index {
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  flex-flow: row wrap;
}
</style>