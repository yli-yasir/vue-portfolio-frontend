import Vue from "vue";
import Router from "vue-router";
import homeView from "./views/Home.vue";

Vue.use(Router);

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited;
const indexScreen = () =>
  import(/* webpackChunkName: "indexScreen" */ "./components/IndexScreen.vue");
const emptyProjectForm = () =>
  import(/* webpackChunkName: "emptyProjectForm" */ "./views/EmptyProjectForm.vue");
const editProjectForm = () =>
import(/* webpackChunkName: "editProjectForm" */ "./views/EditProjectForm.vue");
const projectDetails = ()=>
import(/* webpackChunkName: "projectDetails" */ "./views/ProjectDetails.vue");

const aboutView = () =>
  import(/* webpackChunkName: "about" */ "./views/About.vue");

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    //--HOME-------------
    {
      path: "/",
      redirect: "/home"
    },
    {
      name: "home",
      path: "/home",
      component: homeView
    },
    //--PROJECTS--------------
    {
      name: "projectsIndex",
      path: "/projects",
      component: indexScreen,
      props: route => {
        return { endpoint: "/api/projects", routeForSingle: "projectDetails" };
      }
    },
    {
      name: "newProject",
      path: "/projects/new",
      component: emptyProjectForm
    },
    {
      name: "editProject",
      path: "/projects/:_id/edit",
      component: editProjectForm,
      props: route => {
        return { endpoint: "/api/projects/" + route.params._id , projectId: route.params._id };
      }
    },
    {
      name: "projectDetails",
      path: "/projects/:_id",
      component: projectDetails,
      props: route => {
        return { endpoint: "/api/projects/" + route.params._id };
      }
    },
    {
      path: "/about",
      name: "about",
      component: aboutView
    }
  ]
});
