<template>
  <div class="alpha">
    <div class="header-part">
      <p class="header-part-text-1">Match Connecting super powers</p>
      <p class="header-part-text-2">Match Connecting is like a breath of fresh Air. Secure and Discreet with ready to use features we are sure you will love.</p>
    </div>

    <div class="card-part">

      <div class="nft">
        <div class='main'>
<!--          <img class='tokenImage' src="" alt="image" />-->
          <svg class="card-image" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" style="fill: #C30000 "><path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"></path></svg>
          <h2>Simple to use</h2>
          <p class='description'>Simple steps to follow to have a Match Connecting connection.</p>
        </div>
      </div>

      <div class="nft">
        <div class='main'>
<!--          <img class='tokenImage' src="" alt="image" />-->
          <svg class="card-image" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" style="fill: #C30000 "><path d="M3 11h8V3H3zm2-6h4v4H5zM3 21h8v-8H3zm2-6h4v4H5zm8-12v8h8V3zm6 6h-4V5h4zm-5.99 4h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm4 0h2v2h-2zm2 2h2v2h-2zm-4 0h2v2h-2zm2-6h2v2h-2zm2 2h2v2h-2z"></path></svg>
          <h2>Smart Matching</h2>
          <p class='description'>Create connections with users that are like you.</p>
        </div>
      </div>

      <div class="nft">
        <div class='main'>
<!--          <img class='tokenImage' src="" alt="image" />-->
          <svg class="card-image" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" style="fill: #C30000"><path d="M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z"></path></svg>
          <h2>Filter very fast</h2>
          <p class='description'>Don’t waste your time! Find only what you are interested in!</p>
        </div>
      </div>

      <div class="nft">
        <div class='main'>
<!--          <img class='tokenImage' src="" alt="image" />-->
          <svg class="card-image" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" style="fill: #C30000"><circle cx="6" cy="4" r="2"></circle><path d="M9 7H3a1 1 0 0 0-1 1v7h2v7h4v-7h2V8a1 1 0 0 0-1-1z"></path><circle cx="17" cy="4" r="2"></circle><path d="M20.21 7.73a1 1 0 0 0-1-.73h-4.5a1 1 0 0 0-1 .73L12 14h2l-1 4h2v4h4v-4h2l-1-4h2z"></path></svg>
          <h2>Cool community</h2>
          <p class='description'>Match Connecting network is full of cool members.</p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "SuperPowersSection"
}
</script>

<style scoped>
.alpha{
  color: #FFFFFF;
}

.header-part{
  text-align: center;
  padding-top: 2%;
}

.card-part{
  display: flex;
  justify-content: space-between;
}

.header-part-text-1{
  font-size: 30px;
  padding-bottom: 10px;
}

.header-part-text-2{
  font-size: 18px;
  width: 55%;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 1px 1px #C30000;
}

.nft {
  user-select: none;
  max-width: 300px;
  margin: 2rem auto;
  border: 1px solid #ffffff22;
  background-color: #282c34;
  background: linear-gradient(0deg, rgba(40, 44, 52, 0.2) 0%, rgba(40, 44, 52, 0.2) 100%);
  box-shadow: 0 7px 20px 5px #00000088;
  border-radius: 0.7rem;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  overflow: hidden;
  transition: 0.5s all;
  text-align: center;
}
.nft hr {
  width: 100%;
  border: none;
  border-bottom: 1px solid #88888855;
  margin-top: 0;
}
.nft ins {
  text-decoration: none;
}
.nft .main {
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
}

.nft .main .tokenImage {
  border-radius: 0.5rem;
  max-width: 100%;
  height: 250px;
  object-fit: cover;
}
.nft .main .description {
  margin: 0.5rem 0;
  color: #ffffff;
  text-shadow: 1px 1px #C30000;
}
.nft .main .tokenInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nft .main .tokenInfo .price {
  display: flex;
  align-items: center;
  color: #ee83e5;
  font-weight: 700;
}
.nft .main .tokenInfo .price ins {
  margin-left: -0.3rem;
  margin-right: 0.5rem;
}
.nft .main .tokenInfo .duration {
  display: flex;
  align-items: center;
  color: #a89ec9;
  margin-right: 0.2rem;
}
.nft .main .tokenInfo .duration ins {
  margin: 0.5rem;
  margin-bottom: 0.4rem;
}
.nft .main .creator {
  display: flex;
  align-items: center;
  margin-top: 0.2rem;
  margin-bottom: -0.3rem;
}
.nft .main .creator ins {
  color: #a89ec9;
  text-decoration: none;
}
.nft .main .creator .wrapper {
  display: flex;
  align-items: center;
  border: 1px solid #ffffff22;
  padding: 0.3rem;
  margin: 0;
  margin-right: 0.5rem;
  border-radius: 100%;
  box-shadow: inset 0 0 0 4px #000000aa;
}
.nft .main .creator .wrapper img {
  border-radius: 100%;
  border: 1px solid #ffffff22;
  width: 2rem;
  height: 2rem;
  object-fit: cover;
  margin: 0;
}
.nft ::before {
  position: fixed;
  content: "";
  box-shadow: 0 0 100px 40px #ffffff08;
  top: -10%;
  left: -100%;
  transform: rotate(-45deg);
  height: 60rem;
  transition: 0.7s all;
}
.nft:hover {
  border: 1px solid #ffffff44;
  box-shadow: 0 7px 50px 10px #000000aa;
  transform: scale(1.015);
  filter: brightness(1.3);
}
.nft:hover ::before {
  filter: brightness(0.5);
  top: -100%;
  left: 200%;
}

.bg {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.bg h1 {
  font-size: 20rem;
  filter: opacity(0.5);
}

.card-image{
  margin-left: 31%;
  margin-top: 3%;
  margin-bottom: 15%;
}

@media (max-width: 990px) {
  .header-part-text-2{
    width: 90%;
  }
  .card-part{
    display: block;
    /*justify-content: space-between;*/
  }
}

@media (max-width: 600px) {
  .header-part-text-2{
    font-size: 16px;
  }
}

@media (max-width: 500px) {
  .header-part-text-1{
    font-size: 28px;
  }

  .header-part-text-2{
    font-size: 16px;
  }
}
</style>