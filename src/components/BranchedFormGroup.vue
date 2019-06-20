<template>
<div class="form-group">
  <label :for="mainId + 0">{{mainLabel}}</label>
  <div v-for="(one,index) in ownDataset" :id="mainId+index" :aria-describedby="helpId">
  <template v-for="input in inputs">
  <label :for="input.id + index">{{input.label}}</label>
  <input :value="one[input.propertyKey]" type="text" :name="input.name" class="form-control" :id="input.id + index" :placeholder="input.placeholder">
  </template>
  </div>
  <button v-if="addToDatasetButton" type="button" class="btn btn-primary" @click="addNewItem">+</button>
  <small :id="helpId" class="form-text text-muted">{{help}}</small>
  </div>
</template>


  <script>

export default {
  name: "branched-form-group",
  props: ["mainId", "mainLabel", "inputs", "helpId", "help"],
};
</script>