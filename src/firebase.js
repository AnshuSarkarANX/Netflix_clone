import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwK0I3dVtqydQKOTFa2JEvkCf_J86q11E",
  authDomain: "netflix-clone-31f2b.firebaseapp.com",
  projectId: "netflix-clone-31f2b",
  storageBucket: "netflix-clone-31f2b.appspot.com",
  messagingSenderId: "1037355892016",
  appId: "1:1037355892016:web:8f622d4c67c69e3a7f9cf5",
  measurementId: "G-SST20G1JCW",
};

const App = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(App);

export { db, auth };
