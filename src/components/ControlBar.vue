<template>
  <div class="mb-2">
    <div class="d-flex flex-row-reverse">
      <router-link class="btn btn-warning" :to="basePath + '/' + id + '/edit'">Edit</router-link>
      <button class="btn btn-danger mr-2" @click="isDeleteAlertShown = true">Delete</button>
    </div>
    <div v-if="isDeleteAlertShown" class="alert alert-warning mt-2">
      You sure about that?
      <button class="btn btn-danger ml-2" @click="deleteItem">Delete it</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      isDeleteAlertShown: false
    };
  },
  props: { basePath: String, id: String},
  methods: {
    deleteItem: async function() {
      try {
        var endpoint =`/api${this.basePath}/${this.id}`;
        console.log(endpoint) 
        await axios.delete(endpoint);
        this.$router.push("/");
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>