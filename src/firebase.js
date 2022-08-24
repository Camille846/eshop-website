import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCqFC3Iqjo93BBsMA3FnN34cAFLEElRXa4",
    authDomain: "eshop-e8127.firebaseapp.com",
    projectId: "eshop-e8127",
    storageBucket: "eshop-e8127.appspot.com",
    messagingSenderId: "612051849002",
    appId: "1:612051849002:web:849b042689ab75f4375853",
    measurementId: "G-VLJHZB32K9"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database, app };