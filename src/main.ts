// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig: FirebaseOptions = {
	apiKey: "AIzaSyALyKig968_L0JoesQ_tXmtjty9DklMnbE",
	authDomain: "kantine-102d0.firebaseapp.com",
	projectId: "kantine-102d0",
	storageBucket: "kantine-102d0.appspot.com",
	messagingSenderId: "253612854885",
	appId: "1:253612854885:web:b1eeab305c0bbe766fc08c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db: Firestore = getFirestore();

const varer: Array<Object> = [
	{ name: "Iste", price: 32, stock: 100, category: "drink" },
	{ name: "Baguette", price: 52, stock: 100, category: "food" },
	{ name: "Noodles", price: 12, stock: 100, category: "food" }
];

varer.forEach(async (vare) => {
	await addDoc(collection(db, "varer"), vare);
})
