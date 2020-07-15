import firebase from "firebase";
import db from "@/db";

const state = {
  user: {},
  isLoggedIn: false
};

const mutations = {
  SET_USER(state, user) {
    if (user) {
      state.user = user;
      state.isLoggedIn = true;
    } else {
      state.user = {};
      state.isLoggedIn = false;
    }
  }
};

const actions = {
  login({ commit }) {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        const setUser = {
          id: user.uid,
          email: user.email
        };
        console.log(`Email saved : ${user.email}`);
        db.collection("loggedInUser")
          .doc(setUser.id)
          .set(setUser)
          .then(console.log("Logged in User Added!"))
          .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
          });
        commit("SET_USER", setUser);
      } else {
        commit("SET_USER", null);
      }
    });
  },
  logout() {
    firebase
      .auth()
      .signOut()
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
