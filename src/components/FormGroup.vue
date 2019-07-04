<template>
  <div class="form-group">
    <label :for="inputId">
      <b>{{inputLabel}}</b>
    </label>
    <!-- intentionally using v-model instead of mustache-->
    <textarea
      v-if="textArea"
      :name="inputName"
      class="form-control"
      :id="inputId"
      :aria-describedby="helpId"
      :placeholder="placeholder"
      v-model="ownContent"
      style="height:250px"
    ></textarea>

    <input
      v-else
      :type="inputType"
      :name="inputName"
      class="form-control"
      :id="inputId"
      :aria-describedby="helpId"
      :placeholder="placeholder"
      :value="content"
    >
    <small :id="helpId" class="form-text text-muted">{{help}}</small>
  </div>
</template>


<script>
export default {
  name: "form-group",
  data: function(){
    //Because we are using v-model above in the textarea, we can't use prop content directly
    //or else we will get a vue warning, so here a value is created for content based on the prop
    return {
      ownContent: ''
    }
  },
  props: {
    inputType: { type: String, default: "text" },
    textArea: { type: Boolean, default: false },
    inputId: { type: String },
    inputName: { type: String },
    inputLabel: { type: String },
    placeholder: { type: String },
    help: { type: String },
    content: { type: String }
  },
  computed: {
    helpId: function() {
      return this.inputId + "Help";
    }
  },
  mounted: function() {
    this.ownContent = this.content;
  }
};
</script>

