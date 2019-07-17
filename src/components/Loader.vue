<!--This component is used for fetching data then supplying to a child component.

The responseData data will be exposed via the slotProps to whatever is in
the 'content' slot.

the responseData data that is passed (even while loading) is initially null, if
loading is successful the it will be updated with the fetched data. Child component 
should check for the intial value of null and handle it in anyway they deem suitable.

e.g. show a skeleton screen or a loading screen, or indicate for the user to wait...

if an error occurs while fetching the data then whatever component is in the content 
slot is not rendered and instead whatever is inside the error slot will be rendered.
-->
<template>
  <div>
    <slot v-if="isError" name="error">Something went wrong while loading the data</slot>
    <slot v-else name="content" :responseData="responseData"></slot>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: { endpoint: String },
  data: function() {
    return {
      responseData: null,
      isLoading: true,
      isSuccess: false,
      isError: false
    };
  },
  methods: {
    load: async function() {
      try {
        let response = await axios.get(this.endpoint);
        this.responseData = response.data;
        console.log(`loaded from ${this.endpoint}:`);
        console.log(response.data);
        this.isLoading = true;
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