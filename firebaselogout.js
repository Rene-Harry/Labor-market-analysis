import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyCrZiWd99aC9jZFPMMtOQX03T0pYmOxpfk",
  authDomain: "jobmarketanalysis-a2759.firebaseapp.com",
  projectId: "jobmarketanalysis-a2759",
  storageBucket: "jobmarketanalysis-a2759.appspot.com",
  messagingSenderId: "981545368760",
  appId: "1:981545368760:web:ed00f121f504781c46484d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

logOut.addEventListener('click', (e) => {
  e.preventDefault();
  
    signOut(auth).then(() => {
      // Sign-out successful.
      window.location.href = "index.html";
      
    }).catch((error) => {
      // An error happened.
    });
});