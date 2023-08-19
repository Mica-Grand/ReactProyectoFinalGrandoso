import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChhYncpkcSzDkhvXsinSnlO8mnDkP66yg",
    authDomain: "popglam-a4541.firebaseapp.com",
    projectId: "popglam-a4541",
    storageBucket: "popglam-a4541.appspot.com",
    messagingSenderId: "941912839457",
    appId: "1:941912839457:web:5f6207aed5fd4eb54bda60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
