<template>
  <div class="alpha">
    <forum-header/>
    <forum-body/>
    <footer-home/>
  </div>
</template>

<script>
import FooterHome from "@/components/baseComponents/FooterHome.vue";
import ForumHeader from "@/components/forum/ForumHeader.vue";
import ForumBody from "@/components/forum/ForumBody.vue";

export default {
  name: "ForumView",
  components: {ForumBody, ForumHeader, FooterHome}
}
</script>

<style scoped>

</style>