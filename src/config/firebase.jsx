
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBGZ_whngSsx0fVA0ZoTOX4cCvBazvYREo",
    authDomain: "module-2-5ad74.firebaseapp.com",
    projectId: "module-2-5ad74",
    storageBucket: "module-2-5ad74.appspot.com",
    messagingSenderId: "947555529086",
    appId: "1:947555529086:web:10fd6c68ab37bdec25032f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)