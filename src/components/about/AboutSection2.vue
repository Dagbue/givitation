<template>
  <div class="alpha">

    <div class="image-part">
      <img src="@/assets/yellow-dress.png" alt="bar" class="image" />
    </div>

    <div class="text-part">
      <div class="first-section">
        <p class="first-section-text-2">About</p>
        <p class="first-section-text-3">Experience why Givitation is the best site for Attractive and Elegant people. Start Connecting</p>
        <p class="first-section-text-4">Givitation.com is a site committed to creating connections between sugar daddies/mamas and more youthful sugar babies. sugar daddies/mamas can encounter new and energizing conceivable outcomes when they are connecting with youthful sugar babies</p>
        <p class="first-section-text-4">The right partnership can have a profound impact on your personal growth, which is why Givitation.com doesn’t want you to settle for anything less than your ideal.</p>
        <p class="first-section-text-4">Connect Responsibly! Must be 18 and Over.</p>
      </div>



      <div class="third-section">
        <button class="button button-primary" @click="onPostClick">Send A Request</button>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "AboutSection2",
  methods: {
    onPostClick() {
      this.$router.push("/request");
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>

.alpha{
  display: flex;
  align-items: center;
  align-content: center;
  padding-top: 4%;
  margin-top: 2%;
  margin-bottom: 5%;
}

.image{
  width: 100%;
}
.image-part{
  width: 50%;
  margin-top: 0.8%;
}
.text-part{
  color: #FFFFFF;
  width: 50%;
}



.first-section-text-2{
  text-align: center;
  font-size: 33px;
  color: #C30000;
  font-weight: 900;
  padding-bottom: 2%;
}

.first-section-text-3{
  text-align: center;
  font-size: 16px;
  font-weight: 900;
  width: 65%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2%;
}

.first-section-text-4{
  text-align: center;
  font-size: 16px;
  font-weight: 900;
  width: 75%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2%;
}


.third-section{
  padding-top: 4%;
}

.button {
  padding: 1em 5em;
  color: white;
  text-decoration: none;
  margin-top: 2%;
  border-radius: 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.button-primary {
  color: #FFFFFF;
  background-color: #C30000;
  border: 2px solid #C30000;
}

.button-primary:hover {
  color: #C30000;
  background-color: #ffffff;
  border: 2px solid #ffffff;
}

@media (max-width: 990px) {
}

@media (max-width: 700px) {
  .alpha{
    display: block;
  }
  .image-part{
    width: 100%;
  }
  .text-part{
    width: 100%;
  }
}

@media (max-width: 500px) {

}

</style>