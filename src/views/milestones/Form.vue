<template>
  <form class="container">
    <form-group
      input-id="nameInput"
      input-name="title"
      input-label="Name:"
      placeholder="ios game released"
      help="Unique."
      :content="name"
    ></form-group>

    <form-group
      :text-area="true"
      input-id="descriptionInput"
      input-name="description"
      input-label="Description:"
      placeholder="It's an amazing game..."
      help="What would you like to say about this?"
      :content="description"
    ></form-group>

<form-group
      input-id="originDate"
      input-name="originDate"
      input-label="Origin Date:"
      input-type="date"
      placeholder="https://exampleimghosting/xyz.png"
      help="The date 'it' was conceived."
      :content="originDate"
    ></form-group>

    <button type="button" @click="submitNews" class="mb-4 btn btn-primary">Submit</button>
  </form>
</template>


<script>
import formGroup from "@/components/FormGroup";
import axios from 'axios'
export default {
  props: {
    action: {type: String, default:'/api/milestones'},
    method: {type: String, default: 'post'},
    name: String,
    description: String,
    originDate: Date
  },
  components: {formGroup},
  methods: {
    submitNews: async function() {
      try {
        await axios({
          method: this.method,
          url: this.action,
          data: new FormData(document.querySelector("form"))
        });
        this.$router.push("/home");
      } catch (e) {
        console.log(e);
      }
    }

}};
</script>

