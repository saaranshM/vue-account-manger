<template>
  <div class="container-fluid">
    <div class="row">
      <div class=" col-sm-10 col-md-6 col-lg-4 mx-auto mt-4">
        <div class="card">
          <div class="card-header bg-dark">
            <span style="font-weight: bold; opacity: 1; color: white;"
              >Add New User</span
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
              @click="addUser(user.name, user.email, user.balance)"
            >
              Add User
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { uuid } from "vue-uuid";
import db from "@/db";

export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        balance: 0
      }
    };
  },
  name: "AddUser",

  methods: {
    addUser(name, email, balance) {
      let id = uuid.v1();
      db.collection("users")
        .doc(id)
        .set({
          id,
          name,
          email,
          balance
        })
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
      this.$router.push("/dashboard");
    }
  }
};
</script>

<style scoped></style>
