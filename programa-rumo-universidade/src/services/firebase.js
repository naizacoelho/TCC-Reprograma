// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDp_HycWMjIROhj9g6jVKRtPRD-bbEC8N0",
    authDomain: "programa-rumo-universidade.firebaseapp.com",
    databaseURL: "https://programa-rumo-universidade-default-rtdb.firebaseio.com",
    projectId: "programa-rumo-universidade",
    storageBucket: "programa-rumo-universidade.appspot.com",
    messagingSenderId: "733621631631",
    appId: "1:733621631631:web:f3c6d18f4158a603a94efa",
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase()
export default database