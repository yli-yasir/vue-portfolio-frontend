<template>
  <form class="container">
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

    <form-group
      v-for="(keyedImgUrl,index) in keyedImgUrls"
      :key="keyedImgUrl.key"
      :input-id="keyedImgUrl.key"
      input-name="imgUrls"
      :input-label="`Image No.${index+1} URL:`"
      placeholder="https://exampleimghosting/xyz.png"
      help="URL to image."
      :content="keyedImgUrl.imgUrl"
    ></form-group>

    <button type="button" class="d-block btn btn-primary mb-4" @click="addImgUrl">Add more images</button>

      <form-group
      input-id="originDate"
      input-name="originDate"
      input-label="Origin Date:"
      input-type="date"
      placeholder="https://exampleimghosting/xyz.png"
      help="The date 'it' was conceived."
      :content="originDate"
    ></form-group>

    <button type="button" @click="submitProject" class="my-4 btn btn-primary">Submit</button>
  </form>
</template>


<script>
import formGroup from "@/components/FormGroup";
import axios from "axios";
import Keygen from '@/utils/Keygen';
//this will generate keys with the prefix of imgUrl
let mKeygen = new Keygen('imgUrl');

export default {
  data: ()=>{
   return  {
     //this will be intialized through the created hook
     keyedImgUrls: []
    }
  },
  props: {
    action: { type: String, default: "/api/projects" },
    method: { type: String, default: "post" },
    //these are for the content of the fields, this enables the form to be
    //supplied with initial values, this is useful when editing the form
    //as it allows the fields to be preloaded with information
    name: String,
    thumbnailUrl: String,
    description: String,
    youtubeEmbed: String,
    imgUrls: { type: Array, default: () => [""] },
    originDate:Date
  },
  created(){
    //this returns an array where each object contains the url and a key
    this.keyedImgUrls =  this.imgUrls.map((imgUrl)=> {
        return {
          imgUrl,
          key: mKeygen.gen()
        }})

    console.log(this.keyedImgUrls)
    },
  methods: {
    addImgUrl: function() {
      this.keyedImgUrls.push({ url: "", key: mKeygen.gen() });
    },
    submitProject: async function() {
      try {
        await axios({
          method: this.method,
          url: this.action,
          data: new FormData(document.querySelector("form"))
        });
        this.$router.push("/projects");
      } catch (e) {
        console.log(e);
      }
    }
  },
  components: { formGroup }
};
</script>