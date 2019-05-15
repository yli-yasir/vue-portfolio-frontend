<template>
  <div>
    <!-- progress indicator -->
    <div v-if="loading" class="loading-indicator"></div>

    <div v-else-if="success">
      <slot :response="response"></slot>
    </div>

    <!--error indicator-->
    <div v-else>error</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'loading-screen',
  props: ["endpoint"],
  data: function() {
    return {
      response: null,
      loading: true,
      success: false,
      error: false,
      load: async function() {
        try {
          let response = await axios.get(this.endpoint);
          this.response = response.data;
          this.success = true;
          this.loading = false;
        } catch (err) {
          console.error(err);
          this.error = true;
          this.loading = false;
        }
      }
    };
  },
  mounted: function() {
    console.log('mounted')
    this.load();
  },
  watch: {
    endpoint: function() {
      this.load();
    }
  }
}
</script>