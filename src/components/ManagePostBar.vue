<template>
  <div>
    <div class="d-flex flex-row-reverse">
      <router-link class="btn btn-warning" :to="path + '/' + id + '/edit'">Edit</router-link>
      <button class="btn btn-danger mr-2" @click="showDeleteAlert">Delete</button>
    </div>

    <!--Delete confirmation-->
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
    }
  },
  props: { path: String, id: String },
  methods: {
     showDeleteAlert(){
       this.isDeleteAlertShown= true;
    },
    async deleteItem() {
      try {
        var endpoint = `/api${this.path}/${this.id}`;
        console.log(endpoint);
        await axios.delete(endpoint);
        this.$router.push("/");
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>