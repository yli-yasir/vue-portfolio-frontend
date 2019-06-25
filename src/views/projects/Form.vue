<template>
  <form class="container" method="post" :action="action">
    <form-group
      input-id="nameInput"
      input-name="name"
      input-label="Name:"
      placeholder="Red Leaf"
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

    <form-group
      input-id="youtubeEmbedUrlInput"
      input-name="youtubeEmbed"
      input-label="YouTube:"
      placeholder="https://www.youtube.com/embed/lX44CAz-JhU"
      help="A YouTube embed URL of the project."
      :content="youtubeEmbed"
    ></form-group>

    <!-- since this might be repeated more than once, we need a unique id for
    each contributor input, we will use the key for v-for to help.-->
    <form-group
      v-for="(imgUrl,index) in imgUrls"
      :key="imgUrl.key"
      :input-id="'imgUrlsInput' + index"
      input-name="imgUrls"
      :input-label="`Image No.${index+1} URL:`"
      placeholder="https://exampleimghosting/xyz.png"
      help="URL to image."
      :content="imgUrl.url"
    ></form-group>
    <button type="button" class="d-block btn btn-primary mb-4" @click="addImgUrl">Add more images</button>

    <div v-for="(contributor,index) in contributors" :key="contributor.key">
      <form-group
        :input-id=" 'contributorNamesInput' + index"
        input-name="contributorNames"
        :input-label="`Contributor No.${index+1} Name:`"
        placeholder="John Smith"
        help="The name of the contributor."
        :content="contributor.name"
      ></form-group>
      <form-group
        :input-id=" 'contributorRolesInput' + index "
        input-name="contributorRoles"
        :input-label="`Contributor No.${index+1} Role:`"
        placeholder="Programmer"
        help="The role of the contributor."
        :content="contributor.role"
      ></form-group>
    </div>
    <button
      type="button"
      class="btn btn-primary d-block"
      @click="addContributor"
    >Add more contributors</button>

    <button type="submit" class="my-4 btn btn-primary">Submit</button>
  </form>
</template>


<script>
import formGroup from "@/components/FormGroup";
import keygen from "@/mixins/KeyGen";

export default {
  mixins: [keygen],
  props: {
    action: {type: String, default: '/api/projects' },
    //these are for the content of the fields, this enables the form to be
    //supplied with initial values, this is useful when editing the form
    //as it allows the fields to be preloaded with information
    name: String,
    thumbnailUrl: String,
    description: String,
    youtubeEmbed: String,
    imgUrls: { type: Array, default:()=> [""] },
    contributors: { type: Array, default:()=> [{ name: "", role: "" }] }
  },
  methods: {
    addImgUrl: function(){
      this.imgUrls.push({url:'',key:this.genKey('imgurl')})
    },
    addContributor: function(){
      this.contributors.push({name:"",role:"",key: this.genKey('contributor')})
    },
  },
  created: function(){
    //once the component is created iterate over the items which do not have a key,
    //and patch them with a key to enable them for rendering with v-for
    var vueInstance = this; 
    this.imgUrls.forEach(function(imgUrl,index){   
      vueInstance.$set(vueInstance.imgUrls,index,{url:imgUrl,key: vueInstance.genKey('imgUrl')})
    })


    this.contributors.forEach(function(contributor,index){   
      vueInstance.$set(vueInstance.contributors,index,{name:contributor.name,role: contributor.role,key: vueInstance.genKey('contributor')})
    })
  },
  components: {formGroup}

};
</script>