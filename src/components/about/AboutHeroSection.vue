<template>
  <div class="hero-image">

    <div class="hero-alpha">
      <div class="hero-text">
        <p class="hero-text-1">About Us</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutHeroSection"
}
</script>

<style scoped>
.hero-alpha{
  display: flex;
  /*align-content: center;*/
  /*align-items: center;*/
}

.hero-image {
  background-image: url("@/assets/hero_safety_img.png");
  background-color: #cccccc;
  height: 350px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  width: 70%;
}

.hero-text-1{
  font-size: 50px;
  text-align: center;
  line-height: 1;
  text-shadow: 2px 2px #C30000;
}




</style>