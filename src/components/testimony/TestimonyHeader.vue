<template>
  <div class="alpha">
    <div class="section-alpha">
      <div class="section-1">

        <div class="section-1-text">
          <p class="header">Testimonies</p>
        </div>


        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="why-ibkr" class="image"/>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "TestimonyHeader"
}
</script>

<style scoped>
.section-alpha{
  user-select: none;
  /*max-width: 300px;*/
  /*margin: 2rem auto;*/
  border: 0.5px solid #ffffff22;
  background-color: #282c34;
  background: linear-gradient(0deg, rgba(40, 44, 52, 0.2) 0%, rgba(40, 44, 52, 0.2) 100%);
  box-shadow: 0 7px 20px 5px #00000088;
  /*border-radius: 0.7rem;*/
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  overflow: hidden;
  transition: 0.5s all;
  /*text-align: center;*/
  margin-top: 1%;
}

.section-1{
  display: flex;
  justify-content: space-between;
}

.image{
  width: 25%;
}

.header{
  color: #FFFFFF;
  text-shadow: 1px 1px #C30000;
  font-size: 2.1rem;
  line-height: 1.3;
  font-weight: bold;
  letter-spacing: 0.5px;
}

.section-1-text{
  margin-top: 6%;
  margin-left: 13%;
}


.section-2-content p {
  color: #818a91;
  font-size: 14.5px;
}

@media (max-width: 990px) {
}

@media (max-width: 700px) {
  .image{
    width: 30%;
  }
  .header{
    font-size: 1.8rem;
  }
}

@media (max-width: 500px) {
  .image{
    width: 40%;
  }

  .header{
    margin-top: 10%;
  }
}

</style>

