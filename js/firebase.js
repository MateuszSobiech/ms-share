// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, doc, getDoc, updateDoc } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBdvLWlAmWAlifr62qxDIt_t5GuhXYYTaM',
    authDomain: 'ms-share-844a3.firebaseapp.com',
    projectId: 'ms-share-844a3',
    storageBucket: 'ms-share-844a3.appspot.com',
    messagingSenderId: '1031577625766',
    appId: '1:1031577625766:web:062a5e6f83376e54894067',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// reference
const docRef = doc(db, 'share', 's9GVMzRxJyPyPe1UDiEr');

export const readFirebase = async () => {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data().data;
    } else {
        alert('No such document!');
    }
};

export const updateFirebase = async (data) => {
    await updateDoc(docRef, { data });
};
