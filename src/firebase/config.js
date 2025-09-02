import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";




const firebaseConfig = {
    apiKey: "AIzaSyDpQvJXPdFizfP220StTasPW00ZPhsoaXM",
    authDomain: "connecting-a20f8.firebaseapp.com",
    databaseURL: "https://connecting-a20f8-default-rtdb.firebaseio.com",
    projectId: "connecting-a20f8",
    storageBucket: "connecting-a20f8.appspot.com",
    messagingSenderId: "992622594493",
    appId: "1:992622594493:web:32ac957b575c65b96cead4",
    measurementId: "G-FP329VSWPX"
};




// init firebase
initializeApp(firebaseConfig)



//init firebase auth
const auth = getAuth();

const database = getDatabase();

const db = getFirestore();

const storage = getStorage();

const analytics = getAnalytics();



export { auth, db, database, storage, analytics}


