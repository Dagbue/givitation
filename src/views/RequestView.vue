<template>
  <div class="alpha">
    <request-header/>
    <request-body/>
    <footer-home/>
  </div>
</template>

<script>
import RequestHeader from "@/components/request/RequestHeader.vue";
import FooterHome from "@/components/baseComponents/FooterHome.vue";
import RequestBody from "@/components/request/RequestBody.vue";

export default {
  name: "RequestView",
  components: {RequestBody, FooterHome, RequestHeader}
}
</script>

<style scoped>

</style>