<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-sm-12 col-md-8 col-lg-9">
        <h3 class="table-font">
          <i class="fas fa-users"></i>
          Users
        </h3>
        <hr />
        <div class="table-responsive">
          <table class="table table-striped table-bordered">
            <thead class="thead-dark">
              <tr class="table-font">
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Balance</th>
              </tr>
            </thead>
            <app-user :users="users"> </app-user>
          </table>
        </div>
      </div>
      <div class="col-sm-12 col-md-4 col-lg-2">
        <router-link
          class="btn btn-success btn-block"
          to="/adduser"
          active-class="active"
          tag="button"
        >
          <i class="fas fa-plus"></i>
          New User
        </router-link>
        <button
          class="btn btn-danger btn-block"
          @click="logout"
          v-if="isLoggedIn"
        >
          <i class="fas fa-sign-out-alt"></i>
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import User from "@/components/dashboard/User";
import { mapState } from "vuex";
export default {
  name: "Dashboard",
  computed: {
    ...mapState("auth", ["user", "isLoggedIn"]),
    users() {
      return this.$store.getters.users;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout").then(() => {
        this.$router.push("/login");
      });
    }
  },
  components: {
    appUser: User
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oxygen&display=swap");

.table-font {
  font-family: "Oxygen", sans-serif;
}
hr {
  height: 1px;
  background: black;
}
</style>
