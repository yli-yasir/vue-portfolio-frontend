<template>
<div class="jumbotron mx-2" :style="{backgroundImage: 'url('  + quotedBackgroundUrl + ')' }">
  <div class="dark-layer">
  <h1 class="display-4">{{header}}</h1>
  <p class="lead">{{lead}}</p>
  <hr class="my-4">
  <p>{{content}}</p>
  <router-link class="btn btn-primary btn-lg" :to="url" role="button">Learn more</router-link>
  </div>
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
  padding:0px;
}

.dark-layer{
  background-color: rgba(0,0,0,0.3);
  height:100%;
  width:100%;
  padding: 4rem 2rem;
}

hr{
  border-color: rgba(255,255,255,0.2);
}
</style>