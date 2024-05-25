<template>
  <template v-if="!$route.meta.hideNavigation" >

<!--    <div class="topmost-header">-->
<!--      <div class="topmost-header-1">-->
<!--        <p class="topmost-header-text">-->
<!--          <i class='bx bxs-map' ></i>-->
<!--          C/O Michael Filiou Ltd Salisbury House, 81 High Street, Potters Bar, Hertfordshire, England, EN6 5AS-->
<!--        </p>-->
<!--        <p class="topmost-header-text">-->
<!--          <i class='bx bxs-time-five' ></i>Mon – Sat: 9:00am–18:00pm.-->
<!--        </p>-->
<!--        &lt;!&ndash;          <p class="topmost-header-text">&ndash;&gt;-->
<!--        &lt;!&ndash;            <i class='bx bxs-phone' ></i>+443300010876&ndash;&gt;-->
<!--        &lt;!&ndash;          </p>&ndash;&gt;-->
<!--      </div>-->
<!--    </div>-->

    <div class="separate">

      <div class="style-4">

        <img alt="company logo" src="@/assets/companylogo.png" class="logo" />

        <ul class="menu-4" v-show="!mobile">
          <li class="link"><router-link  to="/" class="link-2">HOME</router-link></li>
          <li class="link"><router-link  to="/about" class="link-2">ABOUT US</router-link></li>
          <li class="link"><router-link  to="/testimony" class="link-2">TESTIMONIES</router-link></li>
          <li class="link"><router-link  to="/contact" class="link-2">CONTACT</router-link></li>
          <li class="link"><router-link  to="/request" class="link-2">REQUEST</router-link></li>
<!--          <li class="link"><router-link  to="/register" class="auth">SIGNUP</router-link></li>-->
<!--          <li class="link"><router-link  to="/login" class="auth">LOGIN</router-link></li>-->
        </ul>

      </div>

      <div class="mobile">
        <div>
          <ul class="dropdown-nav" v-show="mobileNav">
            <img alt="company logo" src="@/assets/companylogo.svg" class="logo2" />
            <li @click="toggleMobileNav2"><router-link  to="/" >HOME</router-link></li>
            <li @click="toggleMobileNav2"><router-link  to="/about" >ABOUT US</router-link></li>
            <li @click="toggleMobileNav2"><router-link  to="/testimony" >TESTIMONIES</router-link></li>
            <li @click="toggleMobileNav2"><router-link  to="/contact" >CONTACT</router-link></li>
            <li @click="toggleMobileNav2"><router-link  to="/request" >REQUEST</router-link></li>
<!--            <li @click="toggleMobileNav2"><router-link  to="/register" >SIGNUP</router-link></li>-->
<!--            <li @click="toggleMobileNav2"><router-link  to="/login" >LOGIN</router-link></li>-->
          </ul>


        </div>
        <div class="icon">
          <i @click="toggleMobileNav" class='bx bx-menu' v-show="mobile" :class="{'icon-active' : mobileNav}"></i>
        </div>
      </div>

    </div>



  </template>
</template>

<script>
export default {
  name: "NavigationView",
  data()  {
    return {
      value1: false,
      mobile: false,
      mobileNav: false,
      windowWidth: false,
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    toggleMobileNav2(){
      this.mobileNav = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 990){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    }
  }
}
</script>

<style scoped>

.bx-menu{
  font-size: 30px;
  margin-top: 10px;
  cursor: pointer;
  transition: .8s ease all;
  color: #FFFFFF;
}
.icon-active{
  transform: rotate(180deg);
}

.logo {
  width: 15%;
  margin-left: 3%;
  /*padding-top: 2px;*/
  padding-bottom: 2px;
}

.style-4 {
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}

.menu-4{
  margin-right: 1%;
}

.link {
  display: inline-block;
  list-style: outside none none;
  margin: 0 1.3em;
  overflow: hidden;
  font-weight: bold;
  font-size: 13.5px;
}

.link-2:hover{
  border-bottom: 1px solid #C30000;
}

.auth{
  background-color: #C30000;
  color: #FFFFFF;
  padding: 0.4em 15px;
  border-radius: 5px;
  position: relative;
  display: inline-block;
  margin: 0;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.1s ease;
}


.link-2 {
  padding: 0.3em 0;
  color: #ffffff;
  position: relative;
  display: inline-block;
  margin: 0;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.1s ease;
}


.topmost-header {
  background-color: #222222;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
  display: flex;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.topmost-header-1 {
  display: flex;
  margin-left: 4%;
}

.topmost-header-text {
  font-size: 12px;
  padding-right: 28px;
  display: flex;
  align-items: center;
  align-content: center;
}
i{
  padding-right: 4px;
  font-size: 14px;
}

.dropdown-nav{
  display: flex;
  align-items: center;
  align-content: center;
  list-style: none;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  max-width: 270px;
  height: 100%;
  /*background-color: #818a91;*/
  background-color: rgba(129 ,138 ,145 , 0.95);
  font-size: 19px;
  /*text-align: left;*
  /*padding-left: 20px;*/
}

.logo2{
  width: 50%;
  margin-top: 1%;
}

.dropdown-nav li {
  margin-top: 12%;
  overflow: hidden;
  list-style: none;
}

.dropdown-nav * {
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.dropdown-nav a {
  padding: 0.3em 0;
  color: #FFFFFF;
  text-shadow: 1px 1px #C30000;
  position: relative;
  display: inline-block;
  letter-spacing: 1px;
  margin: 0;
  text-decoration: none;
}

.dropdown-nav a:before,
.dropdown-nav a:after {
  position: absolute;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.dropdown-nav a:before {
  bottom: 100%;
  display: block;
  height: 3px;
  width: 100%;
  content: "";
  background-color: #C30000;
}

.dropdown-nav a:after {
  padding: 0.3em 0;
  position: absolute;
  bottom: 100%;
  left: 0;
  content: attr(data-hover);
  color: #676767;
  white-space: nowrap;
}

.dropdown-nav li:hover a,
.dropdown-nav.current a {
  color: #C30000;
}

hr {
  color: white;
  width: 100%;
  background-color: white;
  border: 1px solid white;
  margin-top: 95px;
}

.copyright {
  font-size: 15px;
  line-height: 15px;
  text-align: center;
  opacity: 0.75;
  color: white;
  margin-top: 20px;
}








@media (min-width: 1286px) {
  .hamburger {
    display: none;
  }
  /*.menu-4{*/
  /*  display: flex;*/
  /*}*/
}

@media (max-width: 861px) {
  .topmost-header {
    display: none;
  }
}

@media (max-width: 990px) {
  .style-4 {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    width: 100%;
    margin-left: 5%;
    /*margin-left: unset;*/
    /*padding-left: unset;*/
  }
  .bx-menu{
    font-size: 30px;
    /*margin-top: 13px;*/
  }
  .separate{
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
  }

}

@media (max-width: 600px) {
  .bx-menu{
    font-size: 35px;
    /*margin-top: 12px;*/
  }


  .dropdown-nav{
    padding-right: 10%;
    max-width: 220px;
    font-size: 12px;
  }

  .dropdown-nav li {
    margin-top: 8%;
  }

  hr {
    margin-top: 95%;
  }


}

@media (max-width: 450px) {
  .bx-menu{
    font-size: 35px;
    /*margin-top: 10px;*/
  }
  /*.logo {*/
  /*  width: 35%;*/
  /*  margin-left: unset;*/
  /*  padding-left: unset;*/
  /*}*/

}

</style>