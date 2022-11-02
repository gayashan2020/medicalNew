import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDTqS7OuMHvHXgwJJ2nmDq9RkZ-piF2qNg",
  authDomain: "medisafe-research.firebaseapp.com",
  databaseURL: "https://medisafe-research-default-rtdb.firebaseio.com",
  projectId: "medisafe-research",
  storageBucket: "medisafe-research.appspot.com",
  messagingSenderId: "770758160198",
  appId: "1:770758160198:web:d93529f038ab1343d2ff47",
  measurementId: "G-TW8NQ01241",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export default database;
