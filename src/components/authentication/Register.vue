<template>
  <div class="container-fluid">
    <div class="row">
      <div class=" col-sm-10 col-md-6 col-lg-4 mx-auto mt-4">
        <div class="card">
          <div class="card-header bg-dark">
            <span style="font-weight: bold; opacity: 1; color: white;"
              >Register</span
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
                v-model="newUser.email"
              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                id="newStockPrice"
                placeholder="Enter Password"
                v-model="newUser.password"
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary btn-success btn-block"
              @click="createNewUser(newUser.email, newUser.password)"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  </div></template
>

<script>
import firebase from "firebase";

export default {
  name: "Register",
  data() {
    return {
      newUser: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    createNewUser(email, password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          console.log(`User created with email ${user.user.email}`);
        })
        .catch(error => {
          let errorCode = error.code;
          let errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    }
  }
};
</script>

<style scoped></style>
