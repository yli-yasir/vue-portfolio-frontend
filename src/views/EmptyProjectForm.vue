//this component takes datasets as props, the datasets
//the datasets are then passed into each formGroupComponent
//or branchedFormGroupComponent which is enabled through the bindedToDataSetMixin
//thus, a suitable number of forms will be rendered for each dataset, with its value
//if available


<template>
  <form class="container" :method="method" :action="action">

  <form-group :dataset="pathDataset" input-id="pathInput" input-name="path" input-label="*Path:" placeholder="red-leaf-app" help-id="pathHelp" help="Unique, no spaces or underscores."></form-group>

  <form-group :dataset="nameDataset" input-id="nameInput" input-name="name" input-label="*Name:" placeholder="Red Leaf" help-id="pathHelp" help="Preferably unique, can contain any character."></form-group>

  <form-group :dataset="thumbnailUrlDataset" input-id="thumbnailUrlInput" input-name="thumbnailUrl" input-label="*Thumbnail URL:" placeholder="https://exampleimghosting/xyz.png" help-id="thumbnailUrlHelp" help="URL to thumbnail image that will be shown in the project card at the index screen."></form-group>

  <form-group :dataset="shortDescriptionDataset" input-id="shotDescriptionInput" input-name="shortDescription" input-label="Short description:" placeholder="Red leaves are so beautiful" help-id="shortDescriptionHelp" help="A short description of the project."></form-group>

  <form-group :dataset="descriptionDataset" :text-area="true" input-id="descriptionInput" input-name="description" input-label="*Description:" placeholder="Red leaves are so beautiful, they remind me of Autmn." help-id="descriptionHelp" help="A Longer description of the project."></form-group>

  <form-group :dataset="youtubeEmbedDataset" input-id="youtubeEmbedUrlInput" input-name="youtubeEmbed" input-label="Youtube embed URL:" placeholder="https://www.youtube.com/embed/lX44CAz-JhU" help-id="youtubeEmbedHelp" help="A YouTube embed URL of the project."></form-group>

  <form-group :dataset="imgUrlsDataset" :addToDatasetButton="true" input-id="imgUrlsInput" input-name="imgUrls" input-label="*Image URLs:" placeholder="https://exampleimghosting/xyz.png" help-id="imgUrlsHelp" help="one or more URLs to images."></form-group>

  <branched-form-group :dataset="linksDataset" :addToDatasetButton="true" :inputs="[{label:'Label:',id:'linkLabelInput',name:'linkLabel',placeholder:'playstore', propertyKey:'label'},{label:'URL:',id:'linkUrlInput',name:'linkUrl',placeholder:'playstore/mygame.exe',propertyKey:'url'}]" main-id="linksInputContainer" main-label="Links:" help-id="linksHelp" help="A label that describes what the following URL is for."></branched-form-group>

  <branched-form-group :dataset="contributorsDataset" :addToDatasetButton="true" 
  :inputs="[{label:'name:',id:'contributorNameInput',name:'contributorName',placeholder:'John Smith the 17th',propertyKey: 'name'},
  {label:'Role:',id:'contributoRoleInput',name:'contributorRole',placeholder:'graphic design and being cool',propertyKey: 'role'}]" 
  main-id="contributorsInputContainer" main-label="Contributors:" help-id="contributorsHelp" 
  help="The name of contributor(s) and their role."></branched-form-group>

  <button type="submit" class="mb-4 btn btn-primary">Submit</button>

</form>

</template>


<script>
import {defaultDataset} from '@/mixins/BindedToDataset'
import formGroup from '@/components/FormGroup'
import branchedFormGroup from '@/components/BranchedFormGroup'

export default {
    name: "empty-project-form",
  props: {
    method: {type: String, default: "post"},
    action : {type: String, default: "/api/projects"},
    pathDataset: defaultDataset,
    nameDataset: defaultDataset,
    thumbnailUrlDataset: defaultDataset,
    shortDescriptionDataset: defaultDataset,
    descriptionDataset: defaultDataset,
    youtubeEmbedDataset: defaultDataset,
    imgUrlsDataset: defaultDataset,
    linksDataset: defaultDataset,
    contributorsDataset: defaultDataset
  },
  components:{
    formGroup,
    branchedFormGroup
  }}
</script>