import Vue from "vue";
import Vuex from "vuex";
import auth from "@/store/modules/auth";
import { vuexfireMutations, firestoreAction } from "vuexfire";
import db from "@/db";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    ...vuexfireMutations
  },
  modules: {
    auth
  },
  actions: {
    bindUsers: firestoreAction(({ bindFirestoreRef }) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef("users", db.collection("users"));
    })
  },
  getters: {
    users: state => {
      return state.users;
    }
  }
});

export default store;
