import Vue from "vue";
import Router from "vue-router";
import homeView from "./views/Home.vue";

Vue.use(Router);

// const emptyProjectForm =
//   );

// const emptyMemberForm =
// const editMemberForm =
// const MemberDetails = () =>

// const emptyNewsForm = () =>
//   import(/* webpackChunkName: "emptyNewsForm" */ "./views/EmptyNewsForm.vue");
// const editNewsForm = () =>
//   import(/* webpackChunkName: "editNewsForm" */ "./views/EditNewsForm.vue");
// const about = () => import(/* webpackChunkName: "about" */ "./views/About.vue");

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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited;
      component: () =>
        import(/* webpackChunkName: "projectsIndex" */ "./views/projects/Index")
    },
    {
      name: "newProject",
      path: "/projects/new",
      component: () =>
        import(
          /* webpackChunkName: "emptyProjectForm" */ "./views/projects/Form"
        )
    },
    {
      name: "editProject",
      path: "/projects/:id/edit",
      component: () =>
        import(
          /* webpackChunkName: "editProjectForm" */ "./views/projects/EditForm"
        ),
      props: route => {
        return {
          id: route.params.id
        };
      }
    },
    {
      name: "projectDetails",
      path: "/projects/:id",
      component: () =>
        import(
          /* webpackChunkName: "projectDetails" */ "./views/projects/Details"
        ),
      props: route => {
        return {
          id: route.params.id
        };
      }
    },
    //--Members-----
    {
      name: "membersIndex",
      path: "/members",
      component: () =>
        import(/* webpackChunkName: "membersIndex" */ "./views/members/Index")
    },
    {
      name: "newMember",
      path: "/members/new",
      component: () =>
        import(/* webpackChunkName: "emptyMemberForm" */ "./views/members/Form")
    },
    {
      name: "editMember",
      path: "/members/:id/edit",
      component: () =>
        import(
          /* webpackChunkName: "editMemberForm" */ "./views/members/EditForm"
        ),
      props: route => {
        return {
          id: route.params.id
        };
      }
    },
    {
      name: "memberDetails",
      path: "/members/:id",
      component: () =>
        import(
          /* webpackChunkName: "memberDetails" */ "./views/members/Details"
        ),
      props: route => {
        return {
          id: route.params.id
        };
      }
    },
    {
      name: "newNews",
      path: "/news/new",
      component: () =>
        import(/* webpackChunkName: "emptyNewsForm" */ "./views/news/Form")
    },
    {
      name: "editNew",
      path: "/news/:id/edit",
      component: () =>
        import(
          /* webpackChunkName: "editNewsForm" */ "./views/news/EditForm"
        ),
      props: route => {
        return {
          id: route.params.id
        };
      }
    },
    {
      name: "newsDetails",
      path: "/news/:id",
      component: () =>
        import(/* webpackChunkName: "newsDetails" */ "./views/news/Details"),
      props: route => {
        return {
          id: route.params.id
        };
      }
    },
    {
      name: "login",
      path: "/login",
      component: () =>
        import(/* webpackChunkName: "loginForm" */ "./views/Login"),
    }
  ]
});
