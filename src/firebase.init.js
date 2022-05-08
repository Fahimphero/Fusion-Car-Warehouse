// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId
    apiKey: "AIzaSyB5ShW3LQNE59R5gJVo77QwQNvoPJBaZQw",
    authDomain: "fusion-warehouse.firebaseapp.com",
    projectId: "fusion-warehouse",
    storageBucket: "fusion-warehouse.appspot.com",
    messagingSenderId: "1005638040809",
    appId: "1:1005638040809:web:d3989e2842128d42f54478"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;