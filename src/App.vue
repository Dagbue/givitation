<template>
  <div class="alpha">
    <navigation-view/>
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import NavigationView from "@/components/baseComponents/NavigationView.vue";
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  cursor: pointer;
  counter-reset: Serial;
  font-family: 'Outfit', sans-serif;
  /*background: hsla(0, 0%, 100%, 1.0);*/
  background: #000000;
}
a{
  text-decoration: none;
}
input{
  font-family: 'Outfit', sans-serif;
}
textarea{
  font-family: 'Outfit', sans-serif;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 1s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 1s ease-in;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to{
  transform: translateX(-250px);
}

.mobile-nav-enter-to{
  transform: translateX(0);
}
</style>