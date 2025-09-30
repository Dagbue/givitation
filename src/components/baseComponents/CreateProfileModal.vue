<template>
  <div>
    <div class="backdrop"></div>
    <dialog open>
      <div class="welcome-modal">
        <p style="float: right; color: #FFFFFF;" @click="emitClose">x</p>
        <form @submit.prevent="createProfile">
          <p class="text-1">Create Profile</p>

          <div class="seprate">
            <div class="space">
              <label>First Name</label>
              <input type="text" v-model="firstName" placeholder="Enter First Name" class="form-input" />
              18            </div>

            <div class="space">
              <label>Last Name</label>
              <input type="text" v-model="lastName" placeholder="Enter Last Name" class="form-input" />
            </div>
          </div>

          <div class="seprate">
            <div class="space">
              <label>Email</label>
              <input type="email" v-model="email" required placeholder="Enter Email" class="form-input" />
            </div>

            <div class="space">
              <label>Date Of Birth</label>
              <input type="datetime-local" v-model="dob" class="form-input" />
            </div>
          </div>

          <div class="space">
            <label>Nationality</label>
            <input type="text" v-model="nationality" placeholder="Enter Nationality" class="form-input" />
          </div>

          <div class="space">
            <label>Number of meet up</label>
            <input type="number" v-model.number="meetups" placeholder="Enter Number of meet up" class="form-input" />
          </div>

          <div class="seprate">
            <div class="space">
              <label>Amount received</label>
              <input type="number" v-model.number="amountReceived" placeholder="Enter Amount received" class="form-input" />
            </div>

            <div class="space">
              <label>Allowance</label>
              <input type="number" v-model.number="allowance" placeholder="Enter Allowance" class="form-input" />
            </div>
          </div>

          <div class="space">
            <label>Attach Image</label>
            <input type="file" @change="handleFileUpload" class="form-input" />
          </div>

          <button class="link-button-3" type="submit" :disabled="isLoading">
            <span v-if="isLoading" class="spinner"></span>
            {{ isLoading ? 'CREATING...' : 'Create' }}
          </button>
        </form>
      </div>
    </dialog>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/config";
import { doc, setDoc } from "firebase/firestore";

export default {
  name: "CreateProfileModal",
  emits: ['close'],
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
      nationality: "",
      meetups: null,
      amountReceived: null,
      allowance: null,
      imageBase64: "",
      uniqueId: "",
      isLoading: false,
    };
  },
  methods: {
    generateUniqueId() {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let randomPart = '';
      for (let i = 0; i < 7; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomPart += characters[randomIndex];
      }
      return `MC-${randomPart}`;
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageBase64 = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.imageBase64 = "";
      }
    },
    async createProfile() {
      try {
        this.isLoading = true;
        this.uniqueId = this.generateUniqueId();
        await setDoc(
            doc(db, "Profiles", this.email || `profile-${this.uniqueId}`),
            {
              uniqueId: this.uniqueId,
              firstName: this.firstName || "",
              lastName: this.lastName || "",
              email: this.email || "",
              dob: this.dob || "",
              nationality: this.nationality || "",
              meetups: this.meetups ?? 0,
              amountReceived: this.amountReceived ?? 0,
              allowance: this.allowance ?? 0,
              image: this.imageBase64 || "",
              status: 'inActive',
              createdAt: serverTimestamp(),
            },
            { merge: true }
        );
        await Swal.fire({
          icon: "success",
          title: "Success",
          text: "Profile created successfully!",
        });
        this.resetForm();
        this.$emit('close');
      } catch (error) {
        console.error("Error creating profile:", error);
        await Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to create profile. Please try again.",
        });
      } finally {
        this.isLoading = false;
      }
    },
    emitClose() {
      this.$emit('close');
    },
    resetForm() {
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.dob = "";
      this.nationality = "";
      this.meetups = null;
      this.amountReceived = null;
      this.allowance = null;
      this.imageBase64 = "";
      this.uniqueId = "";
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.seprate {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s linear infinite;
  margin-right: 8px;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.space {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 2%;
  width: 100%;
}
.text-1 {
  text-align: center;
  color: #FFFFFF;
  font-size: 25px;
}
.text-2 {
  text-align: center;
  color: #FFFFFF;
  font-size: 17px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.text-3 {
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
.text-4 {
  text-align: left;
  color: #FFFFFF;
  font-size: 16px;
  padding-top: 5px;
  padding-bottom: 5px;
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
div {
  padding-bottom: 10px;
}
.link-button-2 {
  float: left;
  background-color: #C30000;
  border: 1px solid #C30000;
  display: block;
  margin: auto;
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
  border-radius: 5px;
  margin-top: 10px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.link-button-3 {
  float: right;
  margin-top: 5%;
  background-color: #C30000;
  border: 1px solid #C30000;
  display: block;
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
  border-radius: 5px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
dialog {
  position: fixed;
  top: 9vh;
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
  width: 600px;
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
label {
  padding-bottom: 5px;
  color: #FFFFFF;
}
.form-input {
  border: 1px solid #e4e8ee;
  border-radius: 5px;
  height: 35px;
  padding: 5px 20px;
  width: 100%;
}
.displayname {
  background-color: #FFFFFF;
  border: 1px solid #e4e8ee;
  border-radius: 5px;
  height: 35px;
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
.id {
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
  p {
    font-size: unset;
  }
  .id {
    margin-left: unset;
    padding-left: unset;
  }
  .text-1 {
    font-size: 22px;
  }
  .text-2 {
    font-size: 15px;
    padding-top: 3px;
    padding-bottom: 3px;
  }
  .text-3 {
    padding-top: 3px;
    padding-bottom: 3px;
    width: 90%;
  }
}
</style>