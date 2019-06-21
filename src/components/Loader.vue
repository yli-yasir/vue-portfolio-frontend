<template>
  <div>
    <slot v-if="isError" name="error">Something went wrong while loading the data</slot>
    <slot v-else-if="isLoading" name="loading">Loading...</slot>
    <slot v-else name="content" :response="response"></slot>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: { endpoint: String },
  data: function() {
    return {
      response: '',
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