import Vue from "vue";
import Router from "vue-router";
import homeView from "./views/Home.vue";
import projectsIndex from './views/projects/Index'
import projectDetails from './views/projects/Details'
import projectForm from './views/projects/Form'
import editProjectForm from './views/projects/EditForm'
import articlesIndex from './views/articles/Index'
import articleDetails from './views/articles/Details'
import articlesForm from './views/articles/Form'
import editArticlesForm from './views/articles/EditForm'
import milestoneDetails from './views/milestones/Details'
import mileStoneForm from './views/milestones/Form'
import editMileStoneForm from './views/milestones/EditForm'
import loginForm from './views/Login'

Vue.use(Router);

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
      component: projectsIndex
    },
    {
      name: "newProject",
      path: "/projects/new",
      component: projectForm
    },
    {
      name: "editProject",
      path: "/projects/:id/edit",
      component: editProjectForm,
      props: route => {
        return {
          id: route.params.id
        };
      }
    },
    {
      name: "projectDetails",
      path: "/projects/:id",
      component: projectDetails,
      props: route => {
        return {
          id: route.params.id
        };
      }
    },
    //--articles-----
    {
      name: "articlesIndex",
      path: "/articles",
      component: articlesIndex
    },
    {
      name: "newArticle",
      path: "/articles/new",
      component: articlesForm
    },
    {
      name: "editArticle",
      path: "/articles/:id/edit",
      component: editArticlesForm,
      props: route => {
        return {
          id: route.params.id
        };
      }
    },
    {
      name: "ArticleDetails",
      path: "/articles/:id",
      component: articleDetails,
      props: route => {
        return {
          id: route.params.id
        };
      }
    },
    {
      name: "newMilestone",
      path: "/milestones/new",
      component: mileStoneForm
    },
    {
      name: "editMilestone",
      path: "/milestones/:id/edit",
      component: editMileStoneForm,
      props: route => {
        return {
          id: route.params.id
        };
      }
    },
    {
      name: "milestoneDetails",
      path: "/milestones/:id",
      component: 
        milestoneDetails,
      props: route => {
        return {
          id: route.params.id
        };
      }
    },
    {
      name: "login",
      path: "/login",
      component: 
        loginForm
    }
  ]
});
