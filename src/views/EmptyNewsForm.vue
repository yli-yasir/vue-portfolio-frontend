<script>
import formGroup from "@/components/FormGroup";
import { defaultDataset } from "@/mixins/BindedToDataset";

export default {
  props: {
    method: { type: String, default: "post" },
    action: { type: String, default: "/api/news" },
    pathDataset: defaultDataset,
    nameDataset: defaultDataset,
    descriptionDataset: defaultDataset,
    dateDataset: defaultDataset
  },
  components: { formGroup }
};
</script>

<template>
  <form class="container" :method="method" :action="action">
    <form-group
      :dataset="pathDataset"
      input-id="pathInput"
      input-name="path"
      input-label="*Path:"
      placeholder="ios-game-released"
      help-id="pathHelp"
      help="Unique, no spaces or underscores."
    ></form-group>

    <form-group
      :dataset="nameDataset"
      input-id="nameInput"
      input-name="name"
      input-label="*Title:"
      placeholder="ios game released"
      help-id="pathHelp"
      help="Preferably unique, can contain any character."
    ></form-group>

    <form-group
      :dataset="descriptionDataset"
      :text-area="true"
      input-id="descriptionInput"
      input-name="description"
      input-label="*Description:"
      placeholder="Wow we released an amazing game!"
      help-id="descriptionHelp"
      help="what's up?"
    ></form-group>

    <form-group
      :dataset="dateDataset"
      input-type="date"
      input-id="dateInput"
      input-name="date"
      input-label="Date:"
      placeholder="feb?"
      help-id="dateHelp"
      help="the date of the news."
    ></form-group>

    <button type="submit" class="mb-4 btn btn-primary">Submit</button>
  </form>
</template>