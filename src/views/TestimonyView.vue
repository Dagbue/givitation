<template>
  <div>
    <testimony-header/>
    <testimony-body/>
    <footer-home/>
  </div>
</template>

<script>
import TestimonyHeader from "@/components/testimony/TestimonyHeader.vue";
import FooterHome from "@/components/baseComponents/FooterHome.vue";
import TestimonyBody from "@/components/testimony/TestimonyBody.vue";

export default {
  name: "TestimonyView",
  components: {TestimonyBody, FooterHome, TestimonyHeader}
}
</script>

<style scoped>

</style>