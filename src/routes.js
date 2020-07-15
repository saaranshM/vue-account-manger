import Dashboard from "@/components/dashboard/Dashboard";
import Login from "@/components/authentication/Login";
import Register from "@/components/authentication/Register";
import AddUser from "@/components/addNewUser/AddUser";
import User from "@/components/individualUser/User";
import EditUser from "@/components/editUser/EditUser";
// import firebase from "firebase";

export const routes = [
  {
    path: "/adduser",
    component: AddUser,
    meta: {
      requiresAuth: true
    }
  },
  {
    name: "details",
    path: "/details/:id",
    component: User,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/register",
    component: Register,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: "/login",
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: "/dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/",
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    name: "editUser",
    path: "edituser/:id",
    component: EditUser,
    meta: {
      requiresAuth: true
    }
  }
];

// Nav Router
