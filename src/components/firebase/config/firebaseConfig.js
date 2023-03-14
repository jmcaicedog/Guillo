import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const StarFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyA1NBLTashdEoxRozUw2L4E1FmqiiNixic",
    authDomain: "carza-3179b.firebaseapp.com",
    databaseURL: "https://carza-3179b-default-rtdb.firebaseio.com",
    projectId: "carza-3179b",
    storageBucket: "carza-3179b.appspot.com",
    messagingSenderId: "1029262246590",
    appId: "1:1029262246590:web:ae31f5e4210428929814ef",
    measurementId: "G-3C0GFXHH8Y",
  };

  const app = initializeApp(firebaseConfig);

  return getDatabase(app);
};

export default StarFirebase;
