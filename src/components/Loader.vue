<template>
  <div>
    <slot v-if="error" name="error">Something went wrong while loading the data</slot>
    <slot v-else name="content" :response="responsed"></slot>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: { endpoint: String },
  data: function() {
    return {
      response: '',
      loading: true,
      success: false,
      error: false,
    };
  },
  methods: {
    load: async function() {
        try {
          let response = await axios.get(this.endpoint);
          //this.response = response.data;
          this.success = true;
          this.loading = false;
        } catch (err) {
          this.error = true;
          this.loading = false;
        }
      }
  },
  mounted: function() {
    console.log("mounted");
    this.load();
  },
  watch: {
    endpoint: function() {
      this.load();
    }
  },
  computed:{
    //this is for skeleton screens, so if the reponse is not there yet, we render 6
    //empty items
    responsed : function(){
      return this.response === '' ? 6 : this.response;
    }
  }
};
</script>