import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_APP_ID,
    // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID

    apiKey: "AIzaSyCpwrIniir50IwmY4zaqJ15IdI8Wz0f0_4",
    authDomain: "login-project-e0d8a.firebaseapp.com",
    projectId: "login-project-e0d8a",
    storageBucket: "login-project-e0d8a.appspot.com",
    messagingSenderId: "600225161881",
    appId: "1:600225161881:web:1248a05728cbab91cbce08"
})

export const auth = app.auth();
export default app;