<template>
  <div class="hero-image">

    <div class="hero-alpha">
      <div class="hero-text">
        <h1 class="hero-text-1">Find a Sugar Baby or Sugar Daddy/Mama in Your Area Today!</h1>

        <div>
          <p class="hero-text-2">Are you an Elegant man/woman seeking a reliable connections that is mutually beneficial?</p>
          <button class="button button-primary" @click="onPostClick">Join Anonymously & Discretely</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
  methods: {
    onPostClick() {
      this.$router.push("/request");
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>
.hero-alpha{
  display: flex;
}

.hero-image {
  background-image: url("@/assets/hero.png");
  background-color: #cccccc;
  height: 630px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  width: 65%;
}

.hero-text-1{
  font-size: 45px;
  text-align: center;
  line-height: 1;
  text-shadow: 1px 1px #C30000;
}

.hero-text-2{
  font-size: 24px;
  text-align: center;
  line-height: 1.4;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3.5%;
  text-shadow: 1px 1px #C30000;
}


.button {
  padding: 1em 3em;
  color: white;
  text-decoration: none;
  margin-top: 2%;
  border-radius: 5px;
}

.button-primary {
  color: #ffffff;
  background-color: #C30000;
  transition: 0.5s all;
  border: 0.06em solid #C30000;
}

.button-primary:hover {
  color: #C30000;
  background-color: #ffffff;
  border: 0.06em solid #ffffff;
}

@media (max-width: 990px) {
  .hero-text {
    width: 80%;
  }

  .hero-text-2{
    width: 65%;
  }
}

@media (max-width: 700px) {
  .hero-text {
    width: 95%;
  }

  .hero-text-2{
    width: 75%;
  }
}

@media (max-width: 500px) {
  .hero-text {
    width: 95%;
  }

  .hero-text-2{
    width: 90%;
    font-size: 20px;
  }

  .hero-text-1{
    font-size: 34px;
  }
}

</style>