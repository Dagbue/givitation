<template>
  <div class="alpha">
    <figure class="snip1533">
      <figcaption>
        <blockquote>
          <p>“I am currently married and was facing difficulties in providing for my family. However, thanks to the
            assistance of my sugar mommy, I am now able to take care of my family's needs. I am grateful to Match Connecting
            for facilitating this positive change in my life”</p>
        </blockquote>
        <h3>Taj, 23</h3>
        <h4>Singapore</h4>
      </figcaption>
    </figure>
    <figure class="snip1533">
      <figcaption>
        <blockquote>
          <p>“Struggling to afford my rent became a real challenge until one day, while browsing on Google, I
            stumbled upon Match Connecting's advertisement for a sugar daddy. This fortuitous encounter turned
            out to be one of the best decisions I made this year. Thanks to Match Connecting, I found the support I
            needed to overcome my financial burden and secure a place to live. Grateful beyond words”</p>
        </blockquote>
        <h3>Jose M. Jose</h3>
        <h4>New York City, NY</h4>
      </figcaption>
    </figure>
    <figure class="snip1533">
      <figcaption>
        <blockquote>
          <p>“At the age of 55, I held the misconception that sugar mommies were only sought after by younger
            individuals. To my pleasant surprise, I discovered that I was mistaken! I am now relishing in the
            delightful gifts bestowed upon me by my very own sugar mommy. Age has proven to be no barrier when it
            comes to the enjoyment I am experiencing. .”</p>
        </blockquote>
        <h3>Amitabh</h3>
        <h4>Australia</h4>
      </figcaption>
    </figure>
  </div>

  <div class="alpha">
    <figure class="snip1533">
      <figcaption>
        <blockquote>
          <p>“After experiencing the unfortunate combination of losing my job shortly after my divorce, I found myself
            in a difficult situation with no financial stability. It was during this challenging time that a friend of
            mine recommended a particular website to me. Since then, my life has taken a positive turn, as I now have
            the opportunity to connect with several sugar mommy who support me financially. Through these connections,
            I've been able to earn over $15,000 per week and receive incredible gifts from several amazing mommies.”</p>
        </blockquote>
        <h3>Avilit</h3>
        <h4>Miami, FL</h4>
      </figcaption>
    </figure>
    <figure class="snip1533">
      <figcaption>
        <blockquote>
          <p>“My attraction towards older women has always been strong, and thanks to Match Connecting, pursuing this
            preference has become even more convenient. Now, I can engage in activities I genuinely enjoy and receive
            financial compensation for it. This newfound opportunity is truly amazing and brings me immense satisfaction.” </p>
        </blockquote>
        <h3>Keniaku</h3>
        <h4>Japan</h4>
      </figcaption>
    </figure>
    <figure class="snip1533">
      <figcaption>
        <blockquote>
          <p>"I am an avid traveler who greatly appreciates the convenience your service provides. Being able to
            connect with a mommy no matter where I am, is something I find truly wonderful". </p>
        </blockquote>
        <h3>Ben</h3>
        <h4>Manchester England</h4>
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: "TestimonyBody"
}
</script>

<style scoped>
.alpha{
  display: flex;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 2%;
  margin-bottom: 2%;
}
.snip1533 {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  color: #ffffff;
  display: inline-block;
  font-size: 16px;
  margin: 35px 10px 10px;
  max-width: 380px;
  min-width: 250px;
  position: relative;
  text-align: center;
  width: 100%;
  background-color: #282c34;
  background: linear-gradient(0deg, rgba(40, 44, 52, 0.2) 0%, rgba(40, 44, 52, 0.2) 100%);
  /*box-shadow: 0 7px 20px 5px #00000088;*/
  /*border-radius: 0.7rem;*/
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  /*overflow: hidden;*/
  transition: 0.5s all;
  border-radius: 5px;
  border-top: 5px solid #C30000;
}

.snip1533 *,
.snip1533 *:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.1s ease-out;
  transition: all 0.1s ease-out;
}

.snip1533 figcaption {
  padding: 13% 10% 12%;
}

.snip1533 figcaption:before {
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  color: #C30000;
  content: "\f10e";
  font-size: 32px;
  left: 50%;
  line-height: 60px;
  position: absolute;
  top: -30px;
  width: 60px;
}

.snip1533 h3 {
  color: #ffffff;
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
  margin: 10px 0 5px;
}

.snip1533 h4 {
  font-weight: 400;
  margin: 0;
  opacity: 0.5;
}

.snip1533 blockquote {
  /*font-style: italic;*/
  font-weight: 300;
  margin: 0 0 20px;
}

@media (max-width: 990px) {
}

@media (max-width: 700px) {
  .alpha{
    display: block;
    justify-content: unset;
    /*margin-left: 8%;*/
    /*margin-right: 5%;*/
    /*margin-top: 2%;*/
    /*margin-bottom: 2%;*/
  }
}

@media (max-width: 500px) {
}
</style>