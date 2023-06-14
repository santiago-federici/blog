import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyDHrFiqnT-oNAi3B5FrhmnSg3OGjFxngoI",
  authDomain: "blogreactjs-bb0f4.firebaseapp.com",
  projectId: "blogreactjs-bb0f4",
  storageBucket: "blogreactjs-bb0f4.appspot.com",
  messagingSenderId: "1031504361538",
  appId: "1:1031504361538:web:9e494101ef241c95fc15db",
  measurementId: "G-L29JJDKF8R"
};

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

export const getFireStoreApp = () => {
    return app
}