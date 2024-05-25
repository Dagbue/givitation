<template>
  <div class="alpha">

    <div class="image-part">
      <img src="https://affcontent.wpenginepowered.com/wp-content/uploads/2021/04/iStock-1196990731.jpg" alt="bar" class="image" />
    </div>

    <div class="text-part">
      <div class="first-section">
<!--        <p class="first-section-text-1">Start</p>-->
        <p class="first-section-text-2">Start Connecting</p>
        <p class="first-section-text-3">Match Connecting is the luxury Connecting site for successful mommies and
          daddy who just want to have fun discreetly.</p>
        <p class="first-section-text-4">“Elevating your experience” is the foundation of Match Connecting, where you
          will discover the connections, passions, and expectations you desire…every step of the way.</p>
        <p class="first-section-text-4">Match Connecting helps members choose connections that uniquely align with
          their personal passions and dreams. With such a diverse range of people and passions, we provide a safe
          environment to explore, discover, and evolve what desire truly means to you.</p>
      </div>

      <div class="second-section">

        <div class="content-1">
          <img src="@/assets/icon-trophy-1.svg" alt="bar" class="image2" />
          <p class="content-1-text">Best Site for Luxury Connecting</p>
        </div>

        <div class="content-1">
          <img src="@/assets/icon-hearts-1.svg" alt="bar" class="image2" />
          <p class="content-1-text">Desires That Fit Your Lifestyle</p>
        </div>

        <div class="content-1">
          <img src="@/assets/icon-globe-1.svg" alt="bar" class="image2" />
          <p class="content-1-text">15 plus years in over 60 countries</p>
        </div>

        <div class="content-1">
          <img src="@/assets/icon-lock-1.svg" alt="bar" class="image2" />
          <p class="content-1-text">Secure & Private</p>
        </div>

      </div>

      <div class="third-section">
        <button class="button button-primary" @click="onPostClick">Send A Request</button>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "DatingSection",
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
  padding-top: 2%;
  padding-bottom: 5%;
}

.image{
  width: 95%;
  margin-left: 5%;
  margin-top: 4%;
  border-radius: 5px;
}

.image-part{
  width: 50%;
  margin-top: 0.8%;
}
.text-part{
  color: #FFFFFF;
  width: 50%;
}

.first-section-text-1{
  text-align: center;
  font-size: 24px;
  padding-bottom: 5px;
}

.first-section-text-2{
  text-align: center;
  font-size: 33px;
  color: #C30000;
  font-weight: 900;
  padding-bottom: 5px;
}

.first-section-text-3{
  text-align: center;
  font-size: 16px;
  font-weight: 900;
  width: 65%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 7px;
}

.first-section-text-4{
  text-align: center;
  font-size: 16px;
  font-weight: 900;
  width: 75%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 7px;
}

.second-section{
  display: flex;
  align-content: center;
  align-items: center;
}

.image2{
  width: 60%;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
}

.content-1{
  text-align: center;
  padding-top: 3%;
}

.content-1-text{
  padding-top: 5px;
  text-shadow: 2px 2px #C30000;
}

.third-section{
  padding-top: 4%;
}

.button {
  padding: 1em 5em;
  color: white;
  text-decoration: none;
  margin-top: 3%;
  border-radius: 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.button-primary {
  color: #FFFFFF;
  background-color: #C30000;
  border: 2px solid #C30000;
  transition: 0.5s all;
}

.button-primary:hover {
  color: #C30000;
  background-color: #ffffff;
  border: 2px solid #ffffff;
}

@media (max-width: 990px) {
  .alpha{
    display: block;
  }

  .image-part{
    width: 100%;
    margin-top: 0.8%;
  }
  .text-part{
    width: 100%;
  }
}

@media (max-width: 600px) {


}

@media (max-width: 500px) {
  .image{
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .first-section-text-2{
    font-size: 30px;
    padding-bottom: 10px;
    padding-top: 10px;
  }
}

</style>