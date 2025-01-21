
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCBXcXTM2nEtod7BpikHdBW4mTjnlPey6I",
  authDomain: "pai-app-d32a5.firebaseapp.com",
  projectId: "pai-app-d32a5",
  storageBucket: "pai-app-d32a5.appspot.com", 
  messagingSenderId: "930265139531",
  appId: "1:930265139531:web:81a9a5a232a86fe47ac0ce",
  measurementId: "G-F4LVTM6ZTY"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
