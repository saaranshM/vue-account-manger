<template>
  <div class="container-fluid">
    <div class="row">
      <div class=" col-sm-10 col-md-6 col-lg-4 mx-auto mt-4">
        <div class="card">
          <div class="card-header bg-dark">
            <span style="font-weight: bold; opacity: 1; color: white;"
              >Login</span
            >
          </div>
          <div class="card-body">
            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                class="form-control"
                id="newStockName"
                placeholder="Enter Email"
                v-model="user.email"
              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                id="newStockPrice"
                placeholder="Enter Password"
                v-model="user.password"
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary btn-success btn-block"
              @click="emailLogin(user.email, user.password)"
            >
              Login
            </button>
            <router-link
              class="btn btn-info btn-block"
              to="/register"
              active-class="active"
              tag="button"
            >
              Register
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions } from "vuex";

import firebase from "firebase";

export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  name: "Login",
  methods: {
    emailLogin(email, password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          this.$router.push("/dashboard");
        })
        .then(() => {
          this.$store.dispatch("auth/login");
        });
    }
  }
};
</script>

<style scoped></style>
