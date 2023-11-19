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

const auth = getAuth(app);
const db = getFirestore(app);

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
    console.log("Usuário logado com sucesso!");
  })
  .catch((error) => {
    console.log('Usuário não logado! ', true);
  })
}

document.getElementById("loginButton").addEventListener("click", () => {
  login();
});

function displayFeedback(message, isError = false) {
  const feedbackContainer = document.getElementById("feedback");
  feedbackContainer.style.color = isError ? "red" : "green";
  feedbackContainer.innerText = message;
}

function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Obtém o objeto do usuário recém-criado
      const user = userCredential.user;
      // Cria um objeto com dados do usuário
      const user_data = {
        email: email,
        registration_time: new Date().toString(),
      };
      //   Adiciona os dados do usuário ao banco de dados do Firebase
      db.ref("users/" + user.uid).set(user_data);
      //   exibe uma mensagem de sucesso
      displayFeedback("Usuário Criado!");
    })
    .catch((error) => {
      // Exibe uma mensagem de erro
      displayFeedback(error.message, true);
    });
}

document.getElementById("registerButton").addEventListener("click", () => {
  register();
});

function validateEmail(email) {
  const expression = /^[^@]+@\w+(\.\w+)+\w$/;
  return expression.test(email);
}

function validatePassword(password) {
  return password.length >= 6;
}
