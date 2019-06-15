<template>
  <div class="index-screen">
    <card
      :class="cardColor"
      v-for="item in response"
      :cardable="item"
      :key="item._id"
      :url="{ name: routeForSingle , params: { _id : item._id } }
      "
    ></card>
  </div>
</template>

<script>
import card from "./Card";
import loader from "@/mixins/Loader"

export default {
  mixins: [loader],
  name: "index-screen",
  components: {
    card
  },
  props: {cardColor: String,routeForSingle: String}
};
</script>

<style scoped>
.index-screen {
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  flex-flow: row wrap;
}
</style>