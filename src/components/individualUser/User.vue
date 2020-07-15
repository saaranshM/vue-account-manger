<template>
  <div class="container">
    <div class="row">
      <div class=" col-sm-12 col-md-8 col-lg-9">
        <ul class="list-group">
          <li class="list-group-item active">{{ user.name }}</li>
          <li class="list-group-item">Email: {{ user.email }}</li>
          <li class="list-group-item">Balance: {{ user.balance }}</li>
        </ul>
      </div>
      <div class="col-sm-12 col-md-4 col-lg-2">
        <router-link
          class="btn btn-success btn-block"
          :to="{ name: 'editUser', params: { id: user.id } }"
          active-class="active"
          tag="button"
        >
          <i class="fas fa-pen"></i>
          Edit User
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      user: {
        id: "",
        name: "",
        email: "",
        balance: null
      }
    };
  },
  created() {
    let user_id = this.$route.params.id;
    let stateArray = this.$store.getters.users;
    stateArray.forEach(user => {
      if (user.id === user_id) {
        this.user.id = user.id;
        this.user.name = user.name;
        this.user.email = user.email;
        this.user.balance = user.balance;
      }
    });
  }
};
</script>

<style scoped></style>
