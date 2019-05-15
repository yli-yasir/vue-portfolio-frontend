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

:root{
  --bg: #00FFB2;
  --stroke: #202124;
}

.m-bg{
  background-color: var(--bg);
}

.m-border {
  border: 1px solid var(--stroke) !important;
}

.m-rounded-bottom {
  border-bottom-right-radius: 1.5rem !important;
  border-bottom-left-radius: 1.5rem !important;
}


#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--stroke);
}

</style>
