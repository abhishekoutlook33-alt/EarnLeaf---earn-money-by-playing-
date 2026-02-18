import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBncmNkpYx-ryuxFGhGE27HolreJ9ornb4",
  authDomain: "earnleaf---earn-money.firebaseapp.com",
  projectId: "earnleaf---earn-money",
  storageBucket: "earnleaf---earn-money.firebasestorage.app",
  messagingSenderId: "139146602220",
  appId: "1:139146602220:web:1957aa74ac0376ee00e7c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();