<template>
<!--navbar-->
<nav class="navbar shadow m-rounded-bottom justify-content-center navbar-expand-sm m-bg-secondary fixed-top">

  <!--toggler-->
  <button class="navbar-toggler mb-1" type="button" data-toggle="collapse" data-target="#navContainer" aria-controls="navContainer" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

  <!--nav container-->
  <div class="collapse navbar-collapse" id="navContainer">

    <!--nav-->
    <div class="navbar-nav ml-sm-4">
      <router-link data-toggle="collapse" data-target=".navbar-collapse.show" class="nav-item nav-link" to="/home">Home</router-link>
      <router-link data-toggle="collapse" data-target=".navbar-collapse.show" class="nav-item nav-link" to="/projects">Projects</router-link>
      <router-link data-toggle="collapse" data-target=".navbar-collapse.show" class="nav-item nav-link" to="/members">Members</router-link>
    </div>
    <!--end of nav-->

  </div>
  <!--end of nav container-->

</nav>
<!--end of navbar-->
</template>

<script>
export default {
  name: "navbar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-nav {
  text-align: center;
}

.nav-link{
  color: #9E9E9E;
  font-size: 1.2rem;
}

.router-link-active {
  color:white;
  text-decoration: underline;
}



</style>
