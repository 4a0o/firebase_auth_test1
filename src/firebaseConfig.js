import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
	apiKey:"AIzaSyC97Zqog5J-39tqblbqmHWVPXb7I8HBkVw",authDomain:"remitano-app.firebaseapp.com",projectId:"remitano-app",storageBucket:"remitano-app.appspot.com",messagingSenderId:"761033708851",appId:"1:761033708851:web:fb54f41dc499d5a8ee1a46",measurementId:"G-LFXN33MRKC"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp
