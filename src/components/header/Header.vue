<template>
  <nav class="navbar navbar-dark navbar-expand-lg  nav bg-dark">
    <router-link class="navbar-brand" to="/dashboard"
      >Accounting App</router-link
    >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <router-link
          class="nav-item"
          to="/login"
          active-class="active"
          tag="li"
        >
          <a class="nav-link">Login</a>
        </router-link>
        <router-link
          v-if="isLoggedIn"
          class="nav-item"
          to="/dashboard"
          active-class="active"
          tag="li"
        >
          <a class="nav-link">Dashboard</a>
        </router-link>
        <router-link
          class="nav-item "
          to="/register"
          active-class="active"
          tag="li"
        >
          <a class="nav-link">Register</a>
        </router-link>
      </ul>
    </div>
  </nav></template
>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapState("auth", ["user", "isLoggedIn"])
  }
};
</script>

<style scoped></style>
