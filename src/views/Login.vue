<template>
  <form class="container">
  <form-group
      input-id="userNameInput"
      input-name="username"
      input-label="Username:"
      placeholder="John Smith"
    ></form-group>

    <form-group
      input-id="passwordInput"
      input-name="password"
      input-label="Password:"
      placeholder="Cats"
    ></form-group>

    <button type="button" class="mb-4 btn btn-primary" @click="submit">Submit</button>
  </form>
</template>


<script>
import formGroup from "@/components/FormGroup";
import axios from "axios"

export default {
  methods: {
        submit:function() {
      var formData = new FormData(document.querySelector("form"));
      this.$emit('login',formData);
    }
  }
  ,
  components: {formGroup}

};
</script>