<template>
  <form class="container">
  <form-group
      input-id="nameInput"
      input-name="name"
      input-label="Name:"
      placeholder="John Smith"
      help="Unique."
      :content="name"
    ></form-group>

    <form-group
      input-id="thumbnailUrlInput"
      input-name="thumbnailUrl"
      input-label="Thumbnail:"
      placeholder="https://exampleimghosting/xyz.png"
      help="URL to thumbnail image."
      :content="thumbnailUrl"
    ></form-group>

    <form-group
      :text-area="true"
      input-id="descriptionInput"
      input-name="description"
      input-label="Description:"
      placeholder="Red leaves are so beautiful, they remind me of Autmn."
      help="What would you like to say about this?"
      :content="description"
    ></form-group>

    <button @click="submitMember" type="button" class="mb-4 btn btn-primary">Submit</button>
  </form>
</template>


<script>
import formGroup from "@/components/FormGroup";
import axios from 'axios';

export default {
  props: {
    action: {type: String, default:'/api/articles'},
    method: {type: String, default:'post'},
    name: String,
    thumbnailUrl: String,
    description: String
  },
  components: {formGroup},
  methods: {
        submitMember: async function() {
      try {
        await axios({
          method: this.method,
          url: this.action,
          data: new FormData(document.querySelector("form"))
        });
        this.$router.push("/articles");
      } catch (e) {
        console.log(e);
      }
    }
  }

};
</script>