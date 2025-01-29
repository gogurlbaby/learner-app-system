import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDW2Ajx-V8kW6IBeQP2csS9xLDfTLDjHYc",
  authDomain: "lms-app-7a5ef.firebaseapp.com",
  projectId: "lms-app-7a5ef",
  storageBucket: "lms-app-7a5ef.firebasestorage.app",
  messagingSenderId: "706885538748",
  appId: "1:706885538748:web:e3ef467f2eb03d132ed1b9",
  measurementId: "G-B5Y9TPG9F5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);