<template>
  <div class="alpha">
    <div class="form">
      <p class="header">Find you a Match</p>
      <form @submit.prevent="sendMessage">
        <div class="section-1">
          <div class="input-form-2">
            <p class="select-label">Full Name</p>
            <input type="text" class="input-form-1" required placeholder="Full Name" v-model="fullName" />
          </div>
        </div>
        <hr />
        <div class="section-1">
          <div class="input-form-2">
            <p class="select-label">Email</p>
            <input type="email" class="input-form-1" required placeholder="Email" v-model="email" />
          </div>
        </div>
        <hr />
        <div class="section-1">
          <p class="section-1-header">I am a</p>
          <div class="section-1-content">
            <div class="part-1">
              <input type="radio" v-model="gender" value="Male" />
              <p>Male</p>
            </div>
            <div class="part-1">
              <input type="radio" v-model="gender" value="Female" />
              <p>Female</p>
            </div>
          </div>
        </div>
        <hr />
        <div class="section-1">
          <p class="section-1-header">Looking for a</p>
          <div class="section-1-content">
            <div class="part-1">
              <input type="radio" v-model="request" value="Sugar Daddy" />
              <p>Sugar Daddy</p>
            </div>
            <div class="part-1">
              <input type="radio" v-model="request" value="Sugar Mama" />
              <p>Sugar Mama</p>
            </div>
          </div>
        </div>
        <hr />
        <div class="section-1">
          <div class="input-form-2">
            <p class="select-label">Age</p>
            <select class="input-form-1" required v-model="age">
              <option selected disabled value="">Select Age</option>
              <option value="18-25">18-25</option>
              <option value="26-45">26-45</option>
              <option value="46-65">46-65</option>
              <option value="66-85">66-85</option>
              <option value="86-100">86-100</option>
            </select>
          </div>
        </div>
        <hr />
        <div class="section-1">
          <div class="input-form-2">
            <p class="select-label">Country</p>
            <select class="input-form-1" v-model="country" name="country" id="country" required>
              <option selected disabled value="">Choose Country</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
              <option value="Botswana">Botswana</option>
              <option value="Bouvet Island">Bouvet Island</option>
              <option value="Brazil">Brazil</option>
              <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
              <option value="Brunei Darussalam">Brunei Darussalam</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Cape Verde">Cape Verde</option>
              <option value="Cayman Islands">Cayman Islands</option>
              <option value="Central African Republic">Central African Republic</option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Christmas Island">Christmas Island</option>
              <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Congo, the Democratic Republic of the">Congo, the Democratic Republic of the</option>
              <option value="Cook Islands">Cook Islands</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Cote d'Ivoire">Cote d'Ivoire</option>
              <option value="Croatia (Hrvatska)">Croatia (Hrvatska)</option>
              <option value="Cuba">Cuba</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="East Timor">East Timor</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
              <option value="Faroe Islands">Faroe Islands</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="France Metropolitan">France Metropolitan</option>
              <option value="French Guiana">French Guiana</option>
              <option value="French Polynesia">French Polynesia</option>
              <option value="French Southern Territories">French Southern Territories</option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Greece">Greece</option>
              <option value="Greenland">Greenland</option>
              <option value="Grenada">Grenada</option>
              <option value="Guadeloupe">Guadeloupe</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-Bissau">Guinea-Bissau</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Heard and Mc Donald Islands">Heard and Mc Donald Islands</option>
              <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran (Islamic Republic of)">Iran (Islamic Republic of)</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
              <option value="Korea, Republic of">Korea, Republic of</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Lao, People's Democratic Republic">Lao, People's Democratic Republic</option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Macau">Macau</option>
              <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Martinique">Martinique</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Mexico">Mexico</option>
              <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
              <option value="Moldova, Republic of">Moldova, Republic of</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Netherlands Antilles">Netherlands Antilles</option>
              <option value="New Caledonia">New Caledonia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Niue">Niue</option>
              <option value="Norfolk Island">Norfolk Island</option>
              <option value="Northern Mariana Islands">Northern Mariana Islands</option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau">Palau</option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Pitcairn">Pitcairn</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Qatar">Qatar</option>
              <option value="Reunion">Reunion</option>
              <option value="Romania">Romania</option>
              <option value="Russian Federation">Russian Federation</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome and Principe">Sao Tome and Principe</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia (Slovak Republic)">Slovakia (Slovak Republic)</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="St. Helena">St. Helena</option>
              <option value="St. Pierre and Miquelon">St. Pierre and Miquelon</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Svalbard and Jan Mayen Islands">Svalbard and Jan Mayen Islands</option>
              <option value="Swaziland">Swaziland</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syrian Arab Republic">Syrian Arab Republic</option>
              <option value="Taiwan, Province of China">Taiwan, Province of China</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
              <option value="Thailand">Thailand</option>
              <option value="Togo">Togo</option>
              <option value="Tokelau">Tokelau</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Virgin Islands (British)">Virgin Islands (British)</option>
              <option value="Virgin Islands (U.S.)">Virgin Islands (U.S.)</option>
              <option value="Wallis and Futuna Islands">Wallis and Futuna Islands</option>
              <option value="Western Sahara">Western Sahara</option>
              <option value="Yemen">Yemen</option>
              <option value="Yugoslavia">Yugoslavia</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>
          </div>
        </div>
        <hr />
        <div class="section-1">
          <div class="input-form-2">
            <p class="select-label">Enter State/Province</p>
            <input type="text" class="input-form-1" required placeholder="State/Province" v-model="state" />
          </div>
        </div>
        <hr />
        <div class="button-part">
          <button class="button button-primary" type="submit" :disabled="isLoading">
            <span v-if="isLoading" class="spinner"></span>
            {{ isLoading ? 'SENDING...' : 'Send a Request' }}
          </button>
        </div>
      </form>
    </div>
    <div class="image-part">
      <img src="@/assets/home-couple.png" alt="" class="register-image" />
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/config";
import { doc, setDoc } from "firebase/firestore";

export default {
  name: "RequestBody",
  data() {
    return {
      fullName: "",
      email: "",
      gender: "",
      request: "",
      age: "",
      country: "",
      state: "",
      isLoading: false, // New reactive property for loading state
    };
  },
  methods: {
    async sendMessage() {
      try {
        this.isLoading = true; // Start loading
        await setDoc(
            doc(db, "Requests", this.email),
            {
              fullName: this.fullName,
              email: this.email,
              gender: this.gender,
              request: this.request,
              age: this.age,
              country: this.country,
              state: this.state,
              createdAt: serverTimestamp(),
            },
            { merge: true }
        );
        console.log("saved");
        await Swal.fire({
          icon: "success",
          title: "Success",
          text: "Request sent Successfully!",
        });
        this.resetForm();
      } catch (error) {
        console.error("Error sending request:", error);
        await Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to send request. Please try again.",
        });
      } finally {
        this.isLoading = false; // Stop loading regardless of success or failure
      }
    },

    resetForm() {
      this.fullName = "";
      this.email = "";
      this.gender = "";
      this.request = "";
      this.age = "";
      this.country = "";
      this.state = "";
    },
  },
};
</script>

<style scoped>
.alpha {
  color: #ffffff;
  display: flex;
  align-content: center;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 5%;
}

.form {
  width: 50%;
  margin-left: 2%;
  margin-right: 3%;
}

.header {
  text-align: center;
  font-size: 35px;
  margin-bottom: 4%;
  margin-top: 2%;
}

.section-1-content {
  display: flex;
}

.part-1 {
  display: flex;
  align-content: center;
  align-items: center;
  margin-right: 3%;
  font-size: 18px;
}

.part-1 p {
  padding-left: 5px;
}

hr {
  width: 100%;
  background-color: #ffffff22;
  border: 1px solid #ffffff22;
  opacity: 0.3;
  margin-top: 3%;
}

.section-1-header {
  margin-bottom: 2%;
  margin-top: 2%;
  font-size: 20px;
}

.input-form-2 {
  display: block;
}

.input-form-1 {
  order: 1;
  width: 100%;
  padding: 13px 20px;
  margin: 8px 0;
  display: inline-block;
  box-sizing: border-box;
}

select {
  box-sizing: border-box;
  border-radius: 8px;
  -webkit-transition: 0.3s;
  padding-top: 12px;
  padding-bottom: 12px;
  outline: none;
  color: #667085;
  letter-spacing: 0.5px;
  border: 0.5px solid #ffffff22;
  background-color: #282c34;
  background: linear-gradient(0deg, rgba(40, 44, 52, 0.2) 0%, rgba(40, 44, 52, 0.2) 100%);
  box-shadow: 0 7px 20px 5px #00000088;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  overflow: hidden;
  transition: 0.5s all;
}

select:focus {
  border: 1px solid #24405a;
}

.select-label {
  margin-bottom: 2%;
  margin-top: 2%;
  font-size: 20px;
}

input::placeholder {
  color: #667085;
}

input {
  box-sizing: border-box;
  border-radius: 8px;
  -webkit-transition: 0.3s;
  padding-top: 12px;
  padding-bottom: 12px;
  outline: none;
  color: #667085;
  letter-spacing: 0.5px;
  border: 0.5px solid #ffffff22;
  background-color: #282c34;
  background: linear-gradient(0deg, rgba(40, 44, 52, 0.2) 0%, rgba(40, 44, 52, 0.2) 100%);
  box-shadow: 0 7px 20px 5px #00000088;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  overflow: hidden;
  transition: 0.5s all;
}

input:focus {
  border: 1px solid #24405a;
}

.button {
  padding: 1em 10em;
  color: white;
  text-decoration: none;
  margin-top: 3%;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
}



.button-primary {
  color: #ffffff;
  background-color: #c30000;
  border: 2px solid #c30000;
  transition: 0.5s all;
}

.button-primary:hover:not(:disabled) {
  color: #c30000;
  background-color: #ffffff;
  border: 2px solid #ffffff;
}

.button-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
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

@media (max-width: 900px) {
  .alpha {
    display: block;
  }

  .form {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    margin-bottom: 5%;
  }

  .image-part {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 825px) {
  .register-image {
    width: 90%;
  }
}

@media (max-width: 500px) {
  .image {
    width: 40%;
  }

  .select-label {
    font-size: 18px;
  }

  .header {
    margin-top: 10%;
    font-size: 30px;
  }

  .part-1 {
    font-size: 16px;
  }

  .part-1 p {
    padding-left: 5px;
  }

  .section-1-header {
    font-size: 18px;
  }
}
</style>