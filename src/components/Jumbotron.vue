<template>
<div class="jumbotron mx-2" :style="{backgroundImage: 'url('  + quotedBackgroundUrl + ')' }">
  <h1 class="display-4">{{header}}</h1>
  <p class="lead">{{lead}}</p>
  <hr class="my-4">
  <p>{{content}}</p>
  <router-link class="btn btn-primary btn-lg" :to="url" role="button">Learn more</router-link>
</div>
</template>

<script>
export default {
    props: {
        header: String,
        lead: String,
        content: String,
        url: String ,
        backgroundUrl: String
    },
    computed:{
      quotedBackgroundUrl: function(){
        return "'"  + this.backgroundUrl + "'"
      }
    }

}
</script>

<style>
.jumbotron{
  width:900px;
  background-size: cover;
  background-repeat:no-repeat;
  color:white;
  overflow: auto;
  background-color: #2c2f33	;
}
</style>