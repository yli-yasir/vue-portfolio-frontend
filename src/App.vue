<template>
  <div id="app">
      <navbar></navbar>
      <router-view class="content"/>
  </div>
</template>

<script> 
import navbar from '@/components/Navbar'
import axios from 'axios'
export default {
components: {
  navbar
},
mounted(){
  this.$store.dispatch('verifyLogin')
}
}
</script>

<style>

html, body, #app {
  height: 100%;
}

.content {
  height: 100%;
  padding-top: 80px;
}

.index {
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
}

@media (min-width: 768px) {
  .detailsContainer {
    width:50%
  }

 }
</style>
