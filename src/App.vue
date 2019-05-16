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
  
  --bg-primary: #202026;
  --bg-secondary: #202026 ;
  --bg-tertiary: #00E676;
  --stroke:#181a1f;
}

html, body, #app {
  height: 100%;
  color:white;
font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

body{
  background-color: var(--bg-primary)!important;
}

.content {
  background-image: url(#);
  background-position: center top 55px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: auto calc(100vh - 200px);
  height: 100%;
  padding-top: 70px;
}

.m-bg-primary{
  background-color: var(--bg-primary)!important;
}

.m-bg-secondary{
  background-color: var(--bg-secondary)!important;
}

.m-bg-tertiary{
  background-color: var(--bg-tertiary)!important;
}

.m-border {
  border: 2px solid var(--stroke) !important;
}

.m-rounded-bottom {
  border-bottom-right-radius: 1.5rem !important;
  border-bottom-left-radius: 1.5rem !important;
}
.m-rounded {
  border-radius: 1.5rem !important;
}

.m-rounded-top {
  border-top-right-radius: 1.5rem !important;
  border-top-left-radius: 1.5rem !important;
}


</style>
