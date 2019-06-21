<template>
  <div id="app">
      <navbar></navbar>
      <router-view class="content"/>
  </div>
</template>

<script> 
import navbar from '@/components/Navbar'

export default {
components: {
  navbar
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
  align-items: baseline;
  flex-flow: row wrap;
}

@media (min-width: 768px) {
  .detailsContainer {
    width:50%
  }
 }
</style>
