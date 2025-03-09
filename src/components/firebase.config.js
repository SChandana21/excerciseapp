import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDTpjM-k2IE-h5q6E87xER8Tv1jqxV6AL8",
    authDomain: "excercapp.firebaseapp.com",
    databaseURL: "https://excercapp-default-rtdb.firebaseio.com",
    projectId: "excercapp",
    storageBucket: "excercapp.firebasestorage.app",
    messagingSenderId: "157148763053",
    appId: "1:157148763053:web:2f58b265e6ac0a7ee48724",
    measurementId: "G-NTE9K3RFD3"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);
  

  export {app, firestore, storage};