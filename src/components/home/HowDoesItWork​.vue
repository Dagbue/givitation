<template>
  <div class="alpha">

    <div class="content-header">
      <p class="content-header-text">How does it work</p>
    </div>

    <div class="content">

      <div class="content-inner">

        <div class="content-part-1">
          <img src="@/assets/home-dating-search.png" alt="search" class="image" />
        </div>
        <div class="content-part-2">
          <p class="text-1">Search</p>
          <p class="text-2">The simple steps to follow to have a great experience using Givitation. All you have to do is follow
            your gut and your heart!</p>
        </div>

      </div>

    </div>


    <div class="content">

      <div class="content-inner mobile">

        <div class="content-part-3">
          <p class="text-3">Match</p>
          <p class="text-4">Ready to use and easy to setup matching system. You get to choose users profile fields
            and percentage that impact the matching result!</p>
        </div>

        <div class="content-part-1">
          <img src="@/assets/home-dating-match.png" alt="search" class="image" />
        </div>

      </div>

    </div>


    <div class="content">

      <div class="content-inner">

        <div class="content-part-1">
          <img src="@/assets/home-dating-find-out.png" alt="search" class="image" />
        </div>
        <div class="content-part-2">
          <p class="text-1">Find out</p>
          <p class="text-2">Users get to create a beautiful connection, get matched to your desired Sugar lover instantly.</p>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "HowDoesItWork"
}
</script>

<style scoped>
.alpha{
  color: #FFFFFF;
  padding-top: 5%;
  padding-bottom: 5%;
}
.content-header-text{
  text-align: center;
  font-size: 30px;
  margin-top: 2%;
  margin-bottom: 4%;
}

.content-inner{
  display: flex;
  align-items: center;
  align-content: center;
}

.content-part-1{
  width: 50%;
  text-align: center;
}

.content-part-2{
  width: 50%;
}

.text-1{
  padding-bottom: 15px;
  font-size: 30px;
  color: #C30000;
}

.text-2{
  font-size: 17px;
  width: 85%;
  text-shadow: 1px 1px #C30000;
}

.content{
  margin-top: 1%;
}

.content-part-3{
  width: 50%;
  text-align: right;
}

.text-3{
  padding-bottom: 15px;
  font-size: 30px;
  color: #C30000;
}

.text-4{
  font-size: 17px;
  text-shadow: 1px 1px #C30000;
}

@media (max-width: 990px) {
  .content-inner{
    display: block;
  }

  .content-part-1{
    width: 100%;
  }

  .content-part-2{
    width: 100%;
  }

  .text-1{
    text-align: center;
  }

  .text-2{
    text-align: center;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  .mobile{
    display: flex;
    flex-direction: column-reverse;
  }

  .text-3{
    text-align: center;
  }

  .text-4{
    text-align: center;
  }

  .content-part-3{
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }
}

@media (max-width: 600px) {


}

@media (max-width: 500px) {
  .image{
    width: 80%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
</style>