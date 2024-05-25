<template>
  <div class="alpha">

    <div class="section-1">
      <p class="section-1-header">Getting Started on Match Connecting</p>
    </div>

    <div class="section-2">
      <div class="section-2-content">
        <p class="text-1">Find What You Want</p>
        <p class="text-2">Everyone wants something different out of connections. Match Connecting helps you find what you are looking for.</p>
      </div>

      <div class="section-2-content">
        <p class="text-1">Connect with the Sugar Mamas/Daddies</p>
        <p class="text-2">Connect with well-established, exceptional individuals who know how to treat you.</p>
      </div>


      <div class="section-2-content">
        <p class="text-1">Live Life to Its Fullest</p>
        <p class="text-2">Honest Connections allow you to focus on what is important to you, without settling.</p>
      </div>


    </div>

    <div class="third-section">
      <button class="button button-primary" @click="onPostClick">Send A Request</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "AboutGettingStarted",
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
  text-align: center;
  margin-top: 5%;
  margin-bottom: 5%;
}
.section-1-header{
  color: #C30000;
  font-size: 30px;
  margin-top: 2%;
  margin-bottom: 2%;
}
.section-2{
  color: #ffffff;
  margin-top: 3%;
  margin-bottom: 3%;
}

.text-1{
  padding-bottom: 0.5%;
}

.text-2{
  padding-bottom: 1.5%;
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
  .text-2{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 500px) {
  .section-1-header{
    font-size: 27px;
  }
}
</style>