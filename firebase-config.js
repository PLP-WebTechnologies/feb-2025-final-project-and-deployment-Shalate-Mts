
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCWsVlrZ-nFEnd_TWLFM_MXndlnlfjmWW0",
    authDomain: "creations-969ee.firebaseapp.com",
    projectId: "creations-969ee",
    storageBucket: "creations-969ee.firebasestorage.app",
    messagingSenderId: "826850502595",
    appId: "1:826850502595:web:6c8cd5731a565632ed7f76",
    measurementId: "G-GVD6G9B9KX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
