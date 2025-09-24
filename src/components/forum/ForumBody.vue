<template>
  <div class="alpha">

      <div class="elfsight-app-03a638d1-be42-4a0d-9427-daf0462a83da" data-elfsight-app-lazy></div>


  </div>
</template>

<script>
// import Swal from "sweetalert2";
// import { serverTimestamp } from "firebase/firestore";
// import { db } from "@/firebase/config";
// import { doc, setDoc } from "firebase/firestore";

export default {
  name: "ForumBody",
  // data() {
  //   return {
  //     fullName: "",
  //     email: "",
  //     gender: "",
  //     request: "",
  //     age: "",
  //     country: "",
  //     state: "",
  //     isLoading: false, // New reactive property for loading state
  //   };
  // },
  // methods: {
  //   async sendMessage() {
  //     try {
  //       this.isLoading = true; // Start loading
  //       await setDoc(
  //           doc(db, "Requests", this.email),
  //           {
  //             fullName: this.fullName,
  //             email: this.email,
  //             gender: this.gender,
  //             request: this.request,
  //             age: this.age,
  //             country: this.country,
  //             state: this.state,
  //             createdAt: serverTimestamp(),
  //           },
  //           { merge: true }
  //       );
  //       console.log("saved");
  //       await Swal.fire({
  //         icon: "success",
  //         title: "Success",
  //         text: "Request sent Successfully!",
  //       });
  //       this.resetForm();
  //     } catch (error) {
  //       console.error("Error sending request:", error);
  //       await Swal.fire({
  //         icon: "error",
  //         title: "Error",
  //         text: "Failed to send request. Please try again.",
  //       });
  //     } finally {
  //       this.isLoading = false; // Stop loading regardless of success or failure
  //     }
  //   },
  //
  //   resetForm() {
  //     this.fullName = "";
  //     this.email = "";
  //     this.gender = "";
  //     this.request = "";
  //     this.age = "";
  //     this.country = "";
  //     this.state = "";
  //   },
  // },
};
</script>

<style scoped>
.alpha {
  width: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
}


</style>