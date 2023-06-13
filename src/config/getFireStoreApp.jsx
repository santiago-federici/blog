import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBtYwqvr7-5kjbEDwCYhpKUo2BoYLM5wO8",
    authDomain: "blog-812bb.firebaseapp.com",
    projectId: "blog-812bb",
    storageBucket: "blog-812bb.appspot.com",
    messagingSenderId: "124045408727",
    appId: "1:124045408727:web:aa32abc7b9ce5fe6103392",
    measurementId: "G-MLCWNXE626"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

export const getFireStoreApp = () => {
    return app
}