<template>
  <div class="form-group">
      <!-- below adding a 0 to inputId as the label is only for the first inputId -->
    <label :for="inputId + 0">{{inputLabel}}</label>
    <div v-if="textArea">
      <textarea
        v-for="(one,index) in ownDataset"
        :name="inputName"
        class="form-control"
        :id="inputId + index"
        :aria-describedby="helpId"
        :placeholder="placeholder"
      >{{one}}</textarea>
    </div>
    <div v-else>
      <input
        v-for="(one,index) in ownDataset"
        :value="one"
        :type="inputType"
        :name="inputName"
        class="form-control"
        :id="inputId + index"
        :aria-describedby="helpId"
        :placeholder="placeholder"
      >
    </div>
    <button v-if="addToDatasetButton" type="button" class="btn btn-primary" @click="addNewItem">+</button>
    <small :id="helpId" class="form-text text-muted">{{help}}</small>
  </div>
</template>


<script>
import bindedToDatasetMixin from '@/mixins/BindedToDataset'

export default {
  name: "form-group",
  mixins: [bindedToDatasetMixin],
  props: {
    inputType: { type: String, default: "text" },
    textArea: { type: Boolean, default: false },
    inputId: { type: String },
    inputName: { type: String },
    inputLabel: { type: String },
    placeholder: { type: String },
    helpId: { type: String },
    help: { type: String }
  }
};
</script>

