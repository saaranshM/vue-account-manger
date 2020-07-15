<template>
  <tbody>
    <tr v-for="user in users" :key="user.id" class="table-font">
      <td>{{ user.name }}</td>
      <td>{{ user.email }}</td>
      <td>
        <span class="text-success" style="font-weight: bold">$</span
        >{{ user.balance }}
        <router-link
          :to="{ name: 'details', params: { id: user.id } }"
          tag="button"
          class="float-right btn-primary rounded border-0 bg-dark shadow-none"
        >
          <i class="fas fa-info-circle"></i>
          details
        </router-link>
        <button
          class=" float-right btn-primary rounded border-0 bg-danger shadow-none"
          @click="deleteUser(user.id)"
        >
          <i class="fas fa-trash"></i>
          delete
        </button>
      </td>
    </tr>
  </tbody>
</template>

<script>
import db from "@/db";
export default {
  name: "User",
  props: ["users"],
  methods: {
    deleteUser(id) {
      db.collection("users")
        .doc(id)
        .delete()
        .then(function() {
          console.log("Document successfully deleted!");
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oxygen&display=swap");

.table-font {
  font-family: "Oxygen", sans-serif;
}
</style>
