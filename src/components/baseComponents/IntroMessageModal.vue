<template>
  <div>
    <div class="backdrop"></div>
    <dialog open>

      <div class="welcome-modal">
<!--        <p style="float: right;color: #FFFFFF;" @click="close">x</p>-->

        <form @submit.prevent="close">
        <p class="text-1">Enter Security Code </p>

<!--        <p class="text-2">{{count}}</p>-->

        <p class="text-3">Enter Code below to securely access the website </p>


          <div class="space">
            <label>Enter Code</label>
            <input type="text" v-model="firstName" required="required" placeholder="Enter Code" class="form-input"/>
          </div>


<!--          <p class="text-4">Click here to generate code :  {{randomString}}</p>-->

<!--          <p @click="generateRandomString" class="link-button-2">Generate</p>-->


          <button class="link-button-3">Proceed to website</button>



        </form>

      </div>
    </dialog>
  </div>
</template>

<script>


import {collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase/config";
import Swal from "sweetalert2";

export default {
  name: "IntroMessageModal",
  emits: ['close'],
  data () {
    return {
      dialogIsVisible: false,
      firstName: "",
      randomString: "",
      history: [],
    }
  },

  computed: {
    // Access state using a computed property
    count() {
      return this.$store.state.isModalOpened;
    },
  },

  methods: {
    async close() {
      if(this.firstName === this.history.code){
        await this.updateModalOpened()
        await this.$emit('close');
      }else{
        await Swal.fire({
          icon: 'error',
          title: 'error',
          text: 'Incorrect code request for code',
        });
      }

    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    generateRandomString() {
      const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let result = '';
      for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      this.randomString = result;
    },

    updateModalOpened() {
      this.$store.commit('updateIsModalOpened', true);
    },

  },

  async created() {
    const querySnapshot2 = await getDocs(collection(db, "authenticationCode"));
    querySnapshot2.forEach((doc) => {
      let data = {
        'code': doc.data().code,
      }
      this.history = data
    })

  },

  async mounted() {
    const querySnapshot2 = await getDocs(collection(db, "authenticationCode"));
    querySnapshot2.forEach((doc) => {
      let data = {
        'code': doc.data().code,
      }
      this.history = data
    })

  }

}
</script>

<style scoped >
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }

.space{
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 2%;
}

.text-1{
  text-align: center;
  color: #FFFFFF;
  font-size: 25px;
}

.text-2{
  text-align: center;
  color: #FFFFFF;
  font-size: 17px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.text-3{
  text-align: center;
  color: #FFFFFF;
  font-size: 16px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 80%;
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.text-4{
  text-align: left;
  color: #FFFFFF;
  font-size: 16px;
  padding-top: 5px;
  padding-bottom: 5px;
  /*width: 80%;*/
  /*display: block;*/
  /*margin-right: auto;*/
  /*margin-left: auto;*/
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
}

div{
  padding-bottom: 10px;
}

.link-button-2{
  float: left;
  background-color: #C30000;
  border: 1px solid #C30000;
  display: block;
  margin: auto;
  /*display: inline-block;*/
  font-weight: 400;
  width: 130px;
  padding: 5px 20px;
  color: #ffffff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  font-size: 0.875rem;
  height: 33px;
  line-height: 1.4;
  border-radius:  5px;
  margin-top: 10px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.link-button-3{
  float: right;
  margin-top: 5%;
  background-color: #C30000;
  border: 1px solid #C30000;
  display: block;
  /*margin: auto;*/
  /*display: inline-block;*/
  font-weight: 400;
  width: 100%;
  padding: 5px 20px;
  color: #ffffff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  font-size: 0.875rem;
  height: 33px;
  line-height: 1.4;
  border-radius:  5px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

dialog {
  position: fixed;
  top: 18vh;
  width: 32rem;
  height: 20rem;
  left: calc(50% - 17rem);
  margin: 0;
  background-color: transparent;
  z-index: 100;
  border: none;
  animation: modal 0.3s ease-out forwards;
}

.welcome-modal {
  position: relative;
  display: block;
  overflow: hidden;
  width: 550px;
  height: auto;
  padding: 24px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(3, 28, 67, 0.1);
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 34px 0 rgba(3, 28, 67, 0.13);
}
@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}


label{
  padding-bottom: 5px;
  /*padding-top: 25px;*/
  color: #FFFFFF;
}

.form-input{
  border: 1px solid #e4e8ee;
  border-radius: 5px ;
  height: 35px;
  /*color: white;*/
  padding: 5px 20px;
  width: 100%;
}

.displayname{
  background-color: #FFFFFF;
  border: 1px solid #e4e8ee;
  border-radius: 5px ;
  height: 35px;
  /*color: white;*/
  padding: 5px 20px;
  width: 100%;
}

.form-group {
  margin-bottom: 15px;
  margin-left: 5px;
  width: 100%;
  margin-top: 1.5%;
}

.form-group input {
  display: block;
  font-size: 16px;
  line-height: 24px;

  padding: 12px 16px;
  height: 48px;
  border-radius: 8px;
  color: var(--black-color);
  border: 1px solid #e4e8ee;
  box-shadow: none;
  width: 100%;
}

.form-group input:focus {
  outline: none;
  border: 1px solid #24405A;
}

.form-group input::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}

.form-group select {
  display: block;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: -0.1px;
  padding: 12px 16px;
  height: 48px;
  border-radius: 5px;
  color: var(--black-color);
  border: 1px solid #e4e8ee;
  box-shadow: none;
  width: 100%;
}

.form-group select:focus {
  outline: none;
  border: 1px solid #24405A;
}

.form-group select::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}

.id{
  font-size: 16px;
  text-align: left;
}

@media (max-width: 500px) {
  .welcome-modal {
    width: 400px;
    padding: 25px 25px 35px 25px;
  }
  dialog {
    top: 13vh;
    width: 25rem;
    height: 20rem;
    right: 30px;
    left: calc(50% - 12.5rem);
  }
  p{
    font-size: unset;
  }
  .id{
    margin-left: unset;
    padding-left: unset;
  }
  .text-1{
    font-size: 22px;
  }

  .text-2{
    font-size: 15px;
    padding-top: 3px;
    padding-bottom: 3px;
  }

  .text-3{
    /*font-size: 13px;*/
    padding-top: 3px;
    padding-bottom: 3px;
    width: 90%;
  }
}
</style>