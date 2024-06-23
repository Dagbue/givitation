<template>
  <div class="alpha">

    <div class="section-1">
      <p class="section-header">The Match Connecting Community At A Glance</p>
    </div>


    <div class="section-2">

      <div class="section-2-content">
        <p class="text-1">5+ Million</p>
        <p class="text-2">Big Community Of Members World Wide</p>
      </div>
      <div class="vl"></div>
      <hr />

      <div class="section-2-content">
        <p class="text-1">60+</p>
        <p class="text-2">Countries Where Members Use Match Connecting</p>
      </div>
      <div class="vl"></div>
      <hr />

      <div class="section-2-content">
        <p class="text-1">1+ Million</p>
        <p class="text-2">Messages Sent Daily (on average)</p>
      </div>
      <div class="vl"></div>
      <hr />

      <div class="section-2-content">
        <p class="text-1">1,000+</p>
        <p class="text-2">Connections made Daily (on average)</p>
      </div>



    </div>

  </div>
</template>

<script>
export default {
  name: "AboutSection1"
}
</script>

<style scoped>
.alpha{
  color: #FFFFFF;
}

.vl {
  border-left: 2px solid #FFFFFF;
  height: 90px;
}

.section-header{
  text-align: center;
  font-size: 30px;
  margin-top: 2%;
  margin-bottom: 2%;
}

.section-2{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
}

.text-1{
  color: #C30000;
  font-size: 25px;
  margin-bottom: 2%;
  text-align: center;
}

.text-2{
  width: 80%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

hr {
  display: none;
  margin-left: auto;
  margin-right: auto;
  width: 65%;
  background-color: #FFFFFF;
  border: 1px solid #FFFFFF;
  opacity: 0.5;
  margin-top: 20px;
  margin-bottom: 15px;
}




@media (max-width: 700px) {
  .section-2{
    display: block;
  }
  .vl {
    display: none;
  }
  hr{
    display: block;
  }
}

@media (max-width: 500px) {
  .section-header{
    font-size: 25px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
</style>