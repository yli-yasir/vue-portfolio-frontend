<template>
  <div  id="app">
      <navbar v-on:logout="handleLogout" :username="username"></navbar>
      <router-view :isLoggedIn="Boolean(username)" v-on:login="handleLogin" class="content"/>
  </div>
</template>

<script> 
import navbar from '@/components/Navbar'
import axios from 'axios'
export default {
  data: function(){
    return{
    username: null}
  },
components: {
  navbar
},
methods: {
  handleLogin: async function(formData){
        try {
        var response = await axios.post("/api/users/login",formData);
        this.username = response.data;
        this.$router.push('/')    
      } catch (e) {
        console.log(e);
      }
    
  },
  handleLogout: async function(){
    try{
      var response = await axios.post("/api/users/logout");
      this.username = null
    }
    catch(e){
      console.log(e)
    }
    
  }
},
mounted: async function(){
  try{
var response = await axios.get('/api/users/login');
this.username = response.data;
  }
  catch(e){
    console.log(e)
  }
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
