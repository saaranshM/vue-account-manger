<template>
  <div>
    <app-header></app-header>
    <div class="row">
      <transition name="slide" mode="out-in">
        <router-view style="padding-top: 1rem"></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header/Header";

export default {
  created() {
    this.$store.dispatch("bindUsers");
  },
  name: "App",
  components: {
    appHeader: Header
  }
};
</script>

<style>
slide-enter-active {
  animation: slide-in 350ms ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 350ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateX(-30px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0px);
    opacity: 1;
  }
  to {
    transform: translateX(-30px);
    opacity: 0;
  }
}
</style>
