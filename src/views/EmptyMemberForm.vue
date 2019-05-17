<script>
import { defaultDataset } from "@/mixins/BindedToDataset";
import formGroup from "@/components/FormGroup";
import branchedFormGroup from "@/components/BranchedFormGroup";

export default {
  props: {
    method: { type: String, default: "post" },
    action: { type: String, default: "/api/members" },
    pathDataset: defaultDataset,
    nameDataset: defaultDataset,
    thumbnailUrlDataset: defaultDataset,
    shortDescriptionDataset: defaultDataset,
    descriptionDataset: defaultDataset
  },
  components: { formGroup, branchedFormGroup }
};
</script>

<template>
  <form class="container" :method="method" :action="action">
    <form-group
      :dataset="pathDataset"
      input-id="pathInput"
      input-name="path"
      input-label="*Path:"
      placeholder="john-smith"
      help-id="pathHelp"
      help="Unique, no spaces or underscores."
    ></form-group>

    <form-group
      :dataset="nameDataset"
      input-id="nameInput"
      input-name="name"
      input-label="*Name:"
      placeholder="John Smith"
      help-id="pathHelp"
      help="Preferably unique, can contain any character."
    ></form-group>

    <form-group
      :dataset="thumbnailUrlDataset"
      input-id="thumbnailUrlInput"
      input-name="thumbnailUrl"
      input-label="*Thumbnail URL:"
      placeholder="https://exampleimghosting/xyz.png"
      help-id="thumbnailUrlHelp"
      help="URL to thumbnail image that will be shown in the member card at the index screen."
    ></form-group>

    <form-group
      :dataset="shortDescriptionDataset"
      input-id="shotDescriptionInput"
      input-name="shortDescription"
      input-label="Short description:"
      placeholder="John smith has been here since the start"
      help-id="shortDescriptionHelp"
      help="A short description of the member."
    ></form-group>

    <form-group
      :dataset="descriptionDataset"
      :text-area="true"
      input-id="descriptionInput"
      input-name="description"
      input-label="*Description:"
      placeholder="John Smith is xyz and he likes to do abc"
      help-id="descriptionHelp"
      help="A Longer description of the member."
    ></form-group>

    <button type="submit" class="mb-4 btn btn-primary">Submit</button>
  </form>
</template>