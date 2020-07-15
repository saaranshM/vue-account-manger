<template>
  <div class="container-fluid">
    <div class="row">
      <div class=" col-sm-10 col-md-6 col-lg-4 mx-auto mt-4">
        <div class="card">
          <div class="card-header bg-dark">
            <span style="font-weight: bold; opacity: 1; color: white;"
              >Edit User</span
            >
          </div>
          <div class="card-body">
            <div class="form-group">
              <label>Full Name</label>
              <input
                type="text"
                class="form-control"
                id="neeName"
                placeholder="Enter Full Name"
                v-model="user.name"
              />
            </div>
            <div class="form-group">
              <label>email</label>
              <input
                type="email"
                class="form-control"
                id="newEmail"
                placeholder="Enter Email"
                v-model="user.email"
              />
            </div>
            <div class="form-group">
              <label>Balance</label>
              <input
                type="number"
                class="form-control"
                id="newBalance"
                placeholder="Enter Password"
                v-model="user.balance"
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary btn-success btn-block"
              @click="editUser(user.name, user.email, user.balance, user.id)"
            >
              Edit User
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/db";
export default {
  name: "EditUser",
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
  },
  methods: {
    editUser(name, email, balance, id) {
      db.collection("users")
        .doc(id)
        .update({
          name: name,
          email: email,
          balance: balance
        })
        .then(function() {
          console.log("Document successfully updated!");
        })
        .catch(function(error) {
          console.error("Error updating document: ", error);
        });
      this.$router.push("/dashboard");
    }
  }
};
</script>

<style scoped></style>
