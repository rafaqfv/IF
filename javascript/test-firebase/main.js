import { initializeApp } from "firebase/app";
import { addDoc, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAH506uCg6BzzHLh6QvZGXvBNunBPPubpI",
  authDomain: "ifnmg-5a1ad.firebaseapp.com",
  projectId: "ifnmg-5a1ad",
  storageBucket: "ifnmg-5a1ad.appspot.com",
  messagingSenderId: "945466355678",
  appId: "1:945466355678:web:eb13b9f7112363d92cb74f",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Josias",
    last: "Baitola",
    born: 2002,
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
