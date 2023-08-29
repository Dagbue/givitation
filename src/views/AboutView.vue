<template>
  <div class="alpha">
    <about-hero-section/>
    <about-section1/>
    <about-section2/>
    <about-getting-started/>
    <about-section3/>
    <footer-home/>
  </div>
</template>

<script>


import AboutHeroSection from "@/components/about/AboutHeroSection.vue";
import AboutSection1 from "@/components/about/AboutSection1.vue";
import AboutSection2 from "@/components/about/AboutSection2.vue";
import AboutGettingStarted from "@/components/about/AboutGettingStarted.vue";
import AboutSection3 from "@/components/about/AboutSection3.vue";
import FooterHome from "@/components/baseComponents/FooterHome.vue";

export default {
  name: 'AboutView',
  components: {FooterHome, AboutSection3, AboutGettingStarted, AboutSection2, AboutSection1, AboutHeroSection},
}
</script>


<style scoped>

</style>