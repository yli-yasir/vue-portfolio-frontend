<template>
  <div>
    <slot v-if="isError" name="error">Something went wrong while loading the data</slot>
    <slot v-else name="content" :isLoading="isLoading" :response="response"></slot>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: { endpoint: String },
  data: function() {
    return {
      //initial numerical value for skeleton screens, so if the reponse is not there yet,
      // we render n empty items
      response: 3,
      isLoading: true,
      isSuccess: false,
      isError: false
    };
  },
  methods: {
    load: async function() {
      try {
        let response = await axios.get(this.endpoint);
        this.response = response.data;
        this.isLoading = false;
        this.isSuccess = true;
      } catch (err) {
        this.isError = true;
        this.isLoading = false;
      }
    }
  },
  mounted: function() {
    this.load();
  },
  watch: {
    endpoint: function() {
      this.load();
    }
  }
};
</script>