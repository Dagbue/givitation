<template>
  <section class="home-section">
    <div class="home-content">
      <div class="section-1">
        <img src="@/assets/log-out.svg" alt="Notification" @click="logOut"/>&nbsp;&nbsp;
        <img src="@/assets/Notification.svg" alt="Notification"/>
        <div class="vl"></div>
        <img src="@/assets/Avatar.svg" alt="logo" />
        <p class="profile-name">Admin</p>
      </div>
      <slot>
      </slot>
    </div>
  </section>
</template>

<script>
import router from "@/router";

export default {
  name: "DashContent",
  data () {
    return {
      contacts: "",
      approved: '',
      approved2: '',
    }
  },
  methods: {
    logOut() {
      router.push("/")
    }
  }
}
</script>

<style scoped>
.home-content{
  position: fixed;
  left: 225px;
  background-color: #F9FAFB;
  width: calc(100% - 215px);
  height: 100vh;
  transition: all 0.5s ease;
  margin: 0 10px;
  cursor: pointer;
  overflow-y: scroll;
}
.section-1{
  display: flex;
  justify-content: right;
  align-content: center;
  align-items: center;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  padding-right: 3%;
  background-color: #FFFFFF;
}
.vl{
  border-left: 1.5px solid #E7E8F0;
  height: 35px;
  margin-left: 1%;
  margin-right: 1%;
}
.profile-name{
  padding-left: 1%;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #58596C;
}

@media (max-width: 990px) {
  .home-content{
    position: fixed;
    left: unset;
    width: 100%;
    height: 100%;
    margin: unset;
    /*padding: 10px;*/
    padding-left: 12px;
    padding-right: 20px;
    overflow-y: scroll;
  }

}

</style>

