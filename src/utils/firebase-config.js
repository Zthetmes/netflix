import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPhmruD_PDiz-5WKwGMMbB8JU4x_84XOw",
  authDomain: "clone-netflix-cac.firebaseapp.com",
  projectId: "clone-netflix-cac",
  storageBucket: "clone-netflix-cac.appspot.com",
  messagingSenderId: "794216390312",
  appId: "1:794216390312:web:56f66db095b157a7e0ec9d",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
