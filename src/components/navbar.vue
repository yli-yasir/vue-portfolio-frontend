<template>
  <!--navbar-->
  <nav class="navbar navbar-expand-sm navbar-dark bg-primary fixed-top justify-content-center">
    <!--toggler-->
    <button
      class="navbar-toggler m-1"
      type="button"
      data-toggle="collapse"
      data-target="#navContainer"
      aria-controls="navContainer"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!--nav container-->
    <div class="collapse navbar-collapse" id="navContainer">
      <!--nav-->
      <div class="navbar-nav container-fluid ml-sm-4">
        <!--home link-->
        <router-link
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          class="nav-item nav-link"
          to="/home"
        >
          <span class="fas fa-home mr-1"></span>Home
        </router-link>

        <!-- projects link-->
        <router-link
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          class="nav-item nav-link"
          to="/projects"
        >
          <span class="fas fa-briefcase mr-1"></span>Projects
        </router-link>

        <!--members link-->
        <router-link
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          class="nav-item nav-link"
          to="/articles"
        >
          <span class="fas fa-scroll mr-1"></span>Articles
        </router-link>

        <!-- welcome msg shown if user is logged in-->
        <template v-if="username">
          <span id="welcome" class="ml-sm-auto nav-item">Welcome, {{username}}</span>
          <span
            id="logout"
            @click="$emit('logout')"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            class="nav-item nav-link"
          >Logout</span>
        </template>

        <!--login link-->
        <router-link
          v-else
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          class="ml-sm-auto nav-item nav-link"
          to="/login"
        >
          <span class="fas fa-key mr-1"></span> Login
        </router-link>
      </div>
      <!--end of nav-->
    </div>
    <!--end of nav container-->
  </nav>
  <!--end of navbar-->
</template>

<script>
export default {
  name: "navbar",
  props: { username: String }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-nav {
  text-align: center;
}
.navbar {
  padding: 0;
}

.nav-link {
  font-size: 1rem;
  text-transform: uppercase;
}
.router-link-active {
  color: white !important;
}

#welcome {
  color: rgba(255, 255, 255, 0.75);
  padding: 0.9rem 0.5rem;
  font-size: 1rem;
}

#logout:hover {
  cursor: pointer;
}
</style>
