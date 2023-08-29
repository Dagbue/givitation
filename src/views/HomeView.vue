<template>
  <div class="home">
    <hero-section/>
    <dating-section/>
    <super-powers-section/>
    <how-does-it-work/>
    <footer-home/>
  </div>
</template>

<script>


import HeroSection from "@/components/home/HeroSection.vue";
import DatingSection from "@/components/home/DatingSection.vue";
import SuperPowersSection from "@/components/home/SuperPowersSection.vue";
import HowDoesItWork from "@/components/home/HowDoesItWork​.vue";
import FooterHome from "@/components/baseComponents/FooterHome.vue";

export default {
  name: 'HomeView',
  components: {FooterHome, HowDoesItWork, SuperPowersSection, DatingSection, HeroSection},
}
</script>


<style scoped>

</style>
