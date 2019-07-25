<template>
  <form class="container">
  <form-group
      input-id="userNameInput"
      input-name="username"
      input-label="Username:"
      placeholder="John Smith"
      :status="usernameStatus"
    ></form-group>

    <form-group
      input-type="password"
      input-id="passwordInput"
      input-name="password"
      input-label="Password:"
      placeholder="Cats"
      :status="passwordStatus"
    ></form-group>

    <button type="button" class="mb-4 btn btn-primary" @click="submitStuff">Submit</button>
  </form>
</template>


<script>
import formGroup from "@/components/FormGroup";
import axios from "axios"

export default {
  data: ()=> {
    return {errors: {}}
    },
  methods: {
        submitStuff() {
      let formData = new FormData(document.querySelector("form"));
      this.$store.dispatch('login',{formData})
      .then(()=>this.$router.push("/"))
      .catch(e=>this.errors = e.response.data);
    }
  }
  ,
  computed: {
usernameStatus(){
  return this.errors.username ? 'invalid' : 'neutral'
  
},
passwordStatus(){
  return this.errors.password ? 'invalid' : 'neutral'
 }
  },
  components: {formGroup}

};
</script>