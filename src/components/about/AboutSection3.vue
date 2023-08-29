<template>
  <div class="alpha">

    <div class="image-part">
      <img src="@/assets/paris-drawn-to-life.png" alt="bar" class="image" />
    </div>

    <div class="text-part">
      <div class="first-section">
        <p class="first-section-text-2">Givitation Evolution</p>
        <p class="first-section-text-3">Authenticity and open communication have always been the core principles
          guiding what Givitation.com has to offer. Givitation began as GivitationArrangement, where established and attractive
          Sugar Daddies/Mamas could share their expectations for a Sugar baby upfront. Countless harmonious connections have
          been made since the website was created in 2012.</p>
        <p class="first-section-text-4">As the world and the concept of Sugar Babies continue to evolve, so does Givitation.
          We are still committed to helping Sugar Daddies/Mamas find Sugar babies based on open communication, but we are much
          more than that. Givitation is about identifying what drives us and how we can live our best lives with someone
          by our side.</p>
        <p class="first-section-text-4">Life is too short to settle. That is why we want our members to find
          Connections that align with their personal goals and dreams. These Connections begin with Givitation.</p>
      </div>



      <div class="third-section">
        <button class="button button-primary" @click="onPostClick">Send A Request</button>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "AboutSection3",
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
  .first-section-text-2{
    font-size: 30px;
  }
}

</style>