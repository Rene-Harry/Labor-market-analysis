import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";


// Your web app's Firebase configuration
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

signUp.addEventListener('click', (e) => {
	e.preventDefault();
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	createUserWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		// Signed in 
		const user = userCredential.user;
		// ...
		alert("Signed up successfully");
		window.location.href = "home.html";
	})
	.catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
		// ..
		alert(errorMessage);
	});
});

logIn.addEventListener('click', (e) => {
	e.preventDefault();
	const email = document.getElementById('emaillogin').value;
	const password = document.getElementById('passwordlogin').value;
	signInWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		// Signed in
		const user = userCredential.user;
		// ...
		window.location.href = "home.html";
		alert("Logged in successfully");


	})
	.catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
		// ..
		alert(errorMessage);
	});
});





