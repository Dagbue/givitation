<template>
  <div class="alpha">
    <contact-header/>
    <contact-body/>
    <footer-home/>
  </div>
</template>

<script>
import ContactHeader from "@/components/contact/ContactHeader.vue";
import ContactBody from "@/components/contact/ContactBody.vue";
import FooterHome from "@/components/baseComponents/FooterHome.vue";

export default {
  name: "ContactView",
  components: {FooterHome, ContactBody, ContactHeader}
}
</script>

<style scoped>

</style>