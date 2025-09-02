<template>
  <div class="alpha">
    <img alt="company logo" src="@/assets/companylogo.png" class="logo" />
    <div class="section-1">
      <form class="form-alpha" @submit.prevent="sendMessage">
        <p class="text-1">Exclusive Connect Form</p>

        <p class="text-3">Effortlessly Join Our Network Through a Private, Members-Only Form</p>

        <p class="text-2"> Fee ( 510 )</p>


        <div class="space">
          <label>Applicant name</label>
          <input type="text" v-model="applicantName" required="required" placeholder="Enter Applicant's name" class="form-input"/>
        </div>

        <div class="space">
          <label>Date of birth</label>
          <input type="date" v-model="dateOfBirth" required="required" placeholder="Enter Code" class="form-input"/>
        </div>

        <div class="space">
          <label>Nationality</label>
          <input type="text" v-model="nationality" required="required" placeholder="Enter Nationality" class="form-input"/>
        </div>

        <div class="space">
          <label>Mobile No</label>
          <input type="number" v-model="mobileNo" required="required" placeholder="Enter Mobile No" class="form-input"/>
        </div>

        <div class="space">
          <label>Email</label>
          <input type="email" v-model="email" required="required" placeholder="Enter Email" class="form-input"/>
        </div>

        <div class="space">
          <label>Gender</label>
          <input type="text" v-model="gender" required="required" placeholder="Enter Gender" class="form-input"/>
        </div>

        <div class="space">
          <label>Select preferred payment method</label>
          <select v-model="paymentMethod" required="required"  class="form-input">
            <option value="Cash">Cash</option>
            <option value="Transfer">Transfer</option>
          </select>
        </div>


        <!--          <p class="text-4">Click here to generate code :  {{randomString}}</p>-->

        <!--          <p @click="generateRandomString" class="link-button-2">Generate</p>-->


        <button class="link-button-3">Submit Request</button>



      </form>

      <div class="image-part">
        <img src="@/assets/home-couple.png" alt="" class="register-image"/>
<!--        <button @click="sendEmail">click</button>-->
      </div>
    </div>
  </div>
</template>


<script>
import {collection, doc, getDocs, setDoc} from "firebase/firestore";
import {db} from "@/firebase/config";
import {serverTimestamp} from "firebase/database";
import Swal from "sweetalert2";
import emailjs from 'emailjs-com';

export default {
  name: "JoinNowView",
  emits: ['close'],
  data() {
    return {
      dialogIsVisible: false,
      applicantName: "",
      dateOfBirth: "",
      nationality: "",
      mobileNo: "",
      email: "",
      gender: "",
      paymentMethod: "",
      randomString: "",
      history: [],
    }
  },

  computed: {
    count() {
      return this.$store.state.isModalOpened;
    },
  },

  methods: {
    async sendMessage() {
      await setDoc(doc(db, "ExclusiveConnectForm", this.email), {
        applicantName: this.applicantName,
        dateOfBirth: this.dateOfBirth,
        nationality: this.nationality,
        mobileNo: this.mobileNo,
        email: this.email,
        gender: this.gender,
        paymentMethod: this.paymentMethod,
        createdAt: serverTimestamp(),
      }, {merge: true})
          .then(() => {
            console.log('saved')
          });

      // EmailJS configuration
      const templateParams = {
        email: this.email,
        subject: "Exclusive Connect Form",
        companyName: "Match Connecting",
        name: this.applicantName,
        message: `Dear ${this.applicantName},

Thank you for taking the exciting step toward joining Match Connecting, your premier destination for forging meaningful, discreet, and purposeful connections. We truly appreciate your interest in our exclusive community, where affluent individuals and vibrant companions come together to build rewarding relationships tailored to your unique preferences and lifestyle.

Your membership application has been successfully submitted and is now under careful review by our dedicated team. At Match Connecting, we prioritize quality, discretion, and compatibility above all else—ensuring that every member aligns with our values of authenticity, respect, and mutual fulfillment. This process typically takes 24-48 hours, during which we'll verify your details to maintain the high standards that define our platform.

Once approved, you'll receive your personalized Membership ID card, granting you full access to our suite of premium features. Imagine unlocking a world of:
- **Curated Matches**: Handpicked connections based on your profile, interests, and desires, whether you're seeking companionship, adventure, or something more profound.
- **Discreet Networking**: Private messaging, virtual events, and exclusive gatherings designed for seamless, confidential interactions—no matter your relationship status.
- **Enhanced Security**: Advanced privacy tools to protect your identity and ensure a safe, enjoyable experience.
- **Lifestyle Perks**: From travel tips and luxury recommendations to personalized matchmaking advice, we're here to elevate your journey.

We're thrilled to welcome you into a network that's all about #RealConnections and #DatingWithPurpose. In the meantime, feel free to explore our website at www.matchconnecting.com for inspiring stories, tips on crafting the perfect profile, and insights into the vibrant world of modern matchmaking.

For your records, your application reference is Ticket ID #6. If you have any questions or need assistance, our support team is just an email away at support@matchconnecting.com.

We look forward to helping you discover the connections you have been seeking.`
      };

      emailjs.send('service_og8nelc', 'template_nhnuukb', templateParams, 'y1XAYDbFmTaxQCAUF')
          .then((response) => {
            console.log('Email sent successfully!', response.status, response.text);
          }, (error) => {
            console.log('Failed to send email:', error);
          });

      await Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Request sent Successfully! A confirmation email has been sent to you.',
      });
      this.resetForm();
    },

    sendEmail() {
      const templateParams = {
        email: 'dagbuel@gmail.com',
        subject: "Exclusive Connect Team",
        companyName: "Exclusive Connect Team",
        name: this.applicantName,
        message: `Thank you, ${this.applicantName}, for submitting your membership request. Your application is being reviewed, and we will notify you once your Membership ID card is ready. For reference, your ticket ID is #6.`
      };

      emailjs.send('service_og8nelc', 'template_nhnuukb', templateParams, 'y1XAYDbFmTaxQCAUF')
          .then((response) => {
            console.log('Email sent successfully!', response.status, response.text);
          }, (error) => {
            console.log('Failed to send email:', error);
          });
    },

    resetForm() {
      this.applicantName = '';
      this.dateOfBirth = '';
      this.nationality = '';
      this.mobileNo = '';
      this.email = '';
      this.gender = '';
      this.paymentMethod = '';
    },

    async close() {
      await this.$emit('close');
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


<!--<script>-->
<!--import {collection, doc, getDocs, setDoc} from "firebase/firestore";-->
<!--import {db} from "@/firebase/config";-->
<!--import {serverTimestamp} from "firebase/database";-->
<!--import Swal from "sweetalert2";-->

<!--export default {-->
<!--  name: "JoinNowView",-->
<!--  emits: ['close'],-->
<!--  data () {-->
<!--    return {-->
<!--      dialogIsVisible: false,-->
<!--      applicantName: "",-->
<!--      dateOfBirth: "",-->
<!--      nationality: "",-->
<!--      mobileNo: "",-->
<!--      email: "",-->
<!--      gender: "",-->
<!--      paymentMethod: "",-->
<!--      randomString: "",-->
<!--      history: [],-->
<!--    }-->
<!--  },-->

<!--  computed: {-->
<!--    // Access state using a computed property-->
<!--    count() {-->
<!--      return this.$store.state.isModalOpened;-->
<!--    },-->
<!--  },-->

<!--  methods: {-->
<!--    async sendMessage() {-->

<!--      await setDoc(doc(db,"ExclusiveConnectForm", this.email), {-->
<!--        applicantName: this.applicantName,-->
<!--        dateOfBirth: this.dateOfBirth,-->
<!--        nationality: this.nationality,-->
<!--        mobileNo: this.mobileNo,-->
<!--        email: this.email,-->
<!--        gender: this.gender,-->
<!--        paymentMethod: this.paymentMethod,-->
<!--        createdAt: serverTimestamp(),-->
<!--      }, {merge: true})-->
<!--          .then(() => {-->
<!--            console.log('saved')-->
<!--          })-->
<!--      await Swal.fire({-->
<!--        icon: 'success',-->
<!--        title: 'Success',-->
<!--        text: 'Request sent Successfully!',-->
<!--      });-->
<!--      this.resetForm()-->

<!--    },-->

<!--    resetForm() {-->
<!--      this.applicantName = '';-->
<!--      this.dateOfBirth = '';-->
<!--      this.nationality = '';-->
<!--      this.mobileNo = '';-->
<!--      this.email = '';-->
<!--      this.gender = '';-->
<!--      this.paymentMethod = '';-->
<!--    },-->

<!--    async close() {-->
<!--      await this.$emit('close');-->
<!--    },-->
<!--    showDialog() {-->
<!--      this.dialogIsVisible = true;-->
<!--    },-->
<!--    hideDialog() {-->
<!--      this.dialogIsVisible = false;-->
<!--    },-->
<!--    generateRandomString() {-->
<!--      const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';-->
<!--      let result = '';-->
<!--      for (let i = 0; i < 10; i++) {-->
<!--        const randomIndex = Math.floor(Math.random() * characters.length);-->
<!--        result += characters.charAt(randomIndex);-->
<!--      }-->
<!--      this.randomString = result;-->
<!--    },-->

<!--    updateModalOpened() {-->
<!--      this.$store.commit('updateIsModalOpened', true);-->
<!--    },-->

<!--  },-->

<!--  async created() {-->
<!--    const querySnapshot2 = await getDocs(collection(db, "authenticationCode"));-->
<!--    querySnapshot2.forEach((doc) => {-->
<!--      let data = {-->
<!--        'code': doc.data().code,-->
<!--      }-->
<!--      this.history = data-->
<!--    })-->

<!--  },-->

<!--  async mounted() {-->
<!--    const querySnapshot2 = await getDocs(collection(db, "authenticationCode"));-->
<!--    querySnapshot2.forEach((doc) => {-->
<!--      let data = {-->
<!--        'code': doc.data().code,-->
<!--      }-->
<!--      this.history = data-->
<!--    })-->

<!--  }-->
<!--}-->
<!--</script>-->


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
  text-align: left;
  color: #8599a6;
  font-size: 26px;
}

.text-2{
  text-align: left;
  color: #8599a6;
  font-size: 17px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.text-3{
  text-align: left;
  color: #8599a6;
  font-size: 17px;
  padding-top: 5px;
  padding-bottom: 5px;
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

.alpha{
  padding-top: 10px;
}

.logo {
  width: 18%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.section-1{
  display: flex;
  align-items: center;
  align-content: center;
}

.image-part{
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}

.form-alpha{
  width: 50%;
  margin-left: 5%;
}

.register-image{
  width: 85%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
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
  height: 44px;
  line-height: 1.4;
  border-radius:  5px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

dialog {
  position: fixed;
  top: 3vh;
  width: 30rem;
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
  padding: 24px 40px;
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

@media (max-width: 700px) {
  .welcome-modal {
    width: 400px;
    padding: 25px 25px 35px 25px;
  }
  dialog {
    top: 5vh;
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


  .section-1{
    display: block;
  }

  .image-part{
    display: none;
  }

  .form-alpha{
    width: 95%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .logo {
    width: 30%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

}
</style>