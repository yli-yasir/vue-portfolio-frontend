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

</style>
