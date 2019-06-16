import Vue from "vue";
import Router from "vue-router";
import homeView from "./views/Home.vue";

Vue.use(Router);

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited;
const projectsIndexView = () =>
  import(/* webpackChunkName: "projectsIndex" */ "./views/projects/Index");
// const emptyProjectForm = () =>
//   import(
//     /* webpackChunkName: "emptyProjectForm" */ "./views/EmptyProjectForm.vue"
//   );
// const editProjectForm = () =>
//   import(
//     /* webpackChunkName: "editProjectForm" */ "./views/EditProjectForm.vue"
//   );
const projectDetailsView = () =>
  import(/* webpackChunkName: "projectDetails" */ "./views/projects/Details");

// const emptyMemberForm = () =>
//   import(
//     /* webpackChunkName: "emptyMemberForm" */ "./views/EmptyMemberForm.vue"
//   );
// const editMemberForm = () =>
//   import(/* webpackChunkName: "editMemberForm" */ "./views/EditMemberForm.vue");
// const MemberDetails = () =>
//   import(/* webpackChunkName: "MemberDetails" */ "./views/MemberDetails.vue");
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
      component: projectsIndexView,
    },
  //   {
  //     name: "newProject",
  //     path: "/projects/new",
  //     component: emptyProjectForm
  //   },
  //   {
  //     name: "editProject",
  //     path: "/projects/:_id/edit",
  //     component: editProjectForm,
  //     props: route => {
  //       return {
  //         endpoint: "/api/projects/" + route.params._id,
  //         projectId: route.params._id
  //       };
  //     }
  //   },
    {
      name: "projectDetails",
      path: "/projects/:id",
      component: projectDetailsView,
      props: route => {
        return {
          id: route.params.id
        }
      }
    },
  //   //--Members-----
  //   {
  //     name: "membersIndex",
  //     path: "/members",
  //     component: indexScreen,
  //     props: function() {
  //       return { endpoint: "/api/members", routeForSingle: "memberDetails" };
  //     }
  //   },
  //   {
  //     name: "newMember",
  //     path: "/members/new",
  //     component: emptyMemberForm
  //   },
  //   {
  //     name: "editMember",
  //     path: "/members/:_id/edit",
  //     component: editMemberForm,
  //     props: route => {
  //       return {
  //         endpoint: "/api/members/" + route.params._id,
  //         memberId: route.params._id
  //       };
  //     }
  //   },
  //   {
  //     name: "memberDetails",
  //     path: "/members/:_id",
  //     component: MemberDetails,
  //     props: route => {
  //       return {
  //         endpoint: "/api/members/" + route.params._id,
  //         routeForSingle: "memberDetails"
  //       };
  //     }
  //   },
  //   {
  //     name: "newNews",
  //     path: "/news/new",
  //     component: emptyNewsForm
  //   },
  //   {
  //     name: "editNews",
  //     path: "/news/:_id/edit",
  //     component: editNewsForm,
  //     props: route => {
  //       return {
  //         endpoint: "/api/news/" + route.params._id,
  //         newsId: route.params._id
  //       };
  //     }
  //   },
  //   {
  //     path: "/about",
  //     name: "about",
  //     component: about
  //   }
  // ]
  ]
});
