<template>
  <div class="background">
    <div class="container">
      <div class="screen">
        <div class="screen-header">
          <div class="screen-header-left">
            <div class="screen-header-button close"></div>
            <div class="screen-header-button maximize"></div>
            <div class="screen-header-button minimize"></div>
          </div>
          <div class="screen-header-right">
            <div class="screen-header-ellipsis"></div>
            <div class="screen-header-ellipsis"></div>
            <div class="screen-header-ellipsis"></div>
          </div>
        </div>
        <div class="screen-body">
          <div class="screen-body-item left">
            <div class="app-title">
              <span>CONTACT</span>
              <span>US</span>
            </div>
            <div class="app-contact">EMAIL : support@matchconnecting.com</div>
            <a href="https://t.me/officialservicelove" class="app-contact">TELEGRAM : https://t.me/officialservicelove</a>
          </div>
          <div class="screen-body-item">
            <div class="app-form">
              <div class="app-form-group">
                <input class="app-form-control" placeholder="NAME" type="text" required v-model="name" />
              </div>
              <div class="app-form-group">
                <input class="app-form-control" placeholder="EMAIL" type="email" required v-model="email" />
              </div>
              <div class="app-form-group">
                <input class="app-form-control" placeholder="CONTACT NO" type="number" required v-model="number" />
              </div>
              <div class="app-form-group message">
                <input class="app-form-control" placeholder="MESSAGE" type="text" required v-model="message" />
              </div>
              <div class="app-form-group buttons">
                <button class="app-form-button" @click="resetForm">CANCEL</button>
                <button class="app-form-button" @click="sendMessage" :disabled="isLoading">
                  <span v-if="isLoading" class="spinner"></span>
                  {{ isLoading ? 'SENDING...' : 'SEND' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="maps">
      <iframe width="100%" height="700" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=15%20Carrington%20St,%20Sydney%20NSW%202000,%20Australia%20Sydney+(Givitation)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </div>
  </div>
</template>

<script>
import { serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/config";
import { doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";

export default {
  name: "ContactBody",
  data() {
    return {
      name: "",
      email: "",
      number: "",
      message: "",
      isLoading: false, // New reactive property for loading state
    };
  },
  methods: {
    async sendMessage() {
      try {
        this.isLoading = true; // Start loading
        await setDoc(
            doc(db, "SupportRequest", this.email),
            {
              name: this.name,
              email: this.email,
              number: this.number,
              message: this.message,
              createdAt: serverTimestamp(),
            },
            { merge: true }
        );
        console.log("saved");
        await Swal.fire({
          icon: "success",
          title: "Success",
          text: "Message sent Successfully!",
        });
        this.resetForm();
      } catch (error) {
        console.error("Error sending message:", error);
        await Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to send message. Please try again.",
        });
      } finally {
        this.isLoading = false; // Stop loading regardless of success or failure
      }
    },

    resetForm() {
      this.name = "";
      this.email = "";
      this.message = "";
      this.number = "";
    },
  },
};
</script>

<style scoped>
button,
input {
  font-weight: 700;
  letter-spacing: 1.4px;
}

.background {
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 6%;
  margin-bottom: 6%;
}

.container {
  flex: 0 2 900px;
  margin: auto;
  padding: 20px;
}

.screen {
  position: relative;
  background: #3e3e3e;
  border-radius: 15px;
}

.screen:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 20px;
  right: 20px;
  bottom: 0;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  z-index: -1;
}

.screen-header {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: #4d4d4f;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.screen-header-left {
  margin-right: auto;
}

.screen-header-button {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 3px;
  border-radius: 8px;
  background: white;
}

.screen-header-button.close {
  background: #c30000;
}

.screen-header-button.maximize {
  background: #e8e925;
}

.screen-header-button.minimize {
  background: #74c54f;
}

.screen-header-right {
  display: flex;
}

.screen-header-ellipsis {
  width: 3px;
  height: 3px;
  margin-left: 2px;
  border-radius: 8px;
  background: #999;
}

.screen-body {
  display: flex;
}

.screen-body-item {
  flex: 1;
  padding: 50px;
}

.screen-body-item.left {
  display: flex;
  flex-direction: column;
}

.app-title {
  display: flex;
  flex-direction: column;
  position: relative;
  color: #c30000;
  font-size: 26px;
}

.app-title:after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 25px;
  height: 4px;
  background: #c30000;
}

.app-contact {
  margin-top: auto;
  font-size: 15px;
  color: #ffffff;
  text-decoration: none;
}

.app-form-group {
  margin-bottom: 15px;
}

.app-form-group.message {
  margin-top: 40px;
}

.app-form-group.buttons {
  margin-bottom: 0;
  text-align: right;
}

.app-form-control {
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  color: #ddd;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
  transition: border-color 0.2s;
}

.app-form-control::placeholder {
  color: #ffffff;
}

.app-form-control:focus {
  border-bottom-color: #ddd;
}

.app-form-button {
  background: none;
  border: none;
  color: #c30000;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  margin-right: 10px;
  position: relative;
  display: inline-flex;
  align-items: center;
}

.app-form-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.app-form-button:hover {
  color: #e60000; /* Slightly lighter red for hover */
}

.spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid #c30000;
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

.credits {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: #ffa4bd;
  font-size: 16px;
  font-weight: normal;
}

.credits-link {
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
}

.dribbble {
  width: 20px;
  height: 20px;
  margin: 0 5px;
}

.maps {
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 7%;
}

@media screen and (max-width: 520px) {
  .screen-body {
    flex-direction: column;
  }

  .screen-body-item.left {
    margin-bottom: 30px;
  }

  .app-title {
    flex-direction: row;
  }

  .app-title span {
    margin-right: 12px;
  }

  .app-title:after {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .screen-body {
    padding: 40px;
  }

  .screen-body-item {
    padding: 0;
  }
}
</style>