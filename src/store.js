import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    username: null
  },
  mutations: {
    loggedIn(state, payload) {
      state.isLoggedIn = true;
      state.username = payload.username;
    },
    loggedOut(state) {
      state.isLoggedIn = false;
      state.username = null;
    }
  },
  actions: {
    async login({ commit }, { formData, router }) {
      try {
        let response = await axios.post("/api/users/login", formData);
        commit("loggedIn", { username: response.data });
        router.push("/");
      } catch (e) {
        console.log(e);
      }
    },
    async logout({ commit }) {
      try {
        await axios.post("/api/users/logout");
        commit("loggedOut");
      } catch (e) {
        console.log(e);
      }
    },
    async verifyLogin({ commit }) {
      //check if the user is logged in
      try {
        let response = await axios.get("/api/users/login");
        commit("loggedIn", { username: response.data });
      } catch (e) {
        console.log(e);
      }
    }
  }
});
