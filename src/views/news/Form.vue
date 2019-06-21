<template>
  <form class="container" method="post" :action="action">
  <form-group
      input-id="nameInput"
      input-name="name"
      input-label="Name:"
      placeholder="ios game released"
      help="Unique."
      :content="name"
    ></form-group>

    <form-group
      :text-area="true"
      input-id="descriptionInput"
      input-name="description:"
      input-label="Description:"
      placeholder="It's an amazing game..."
      help="What would you like to say about this?"
      :content="description"
    ></form-group>

    <button type="submit" class="mb-4 btn btn-primary">Submit</button>
  </form>
</template>


<script>
import formGroup from "@/components/FormGroup";

export default {
  props: {
    action: {type: String, default:'/api/news'},
    name: String,
    description: String
  },
  components: {formGroup}

};
</script>

