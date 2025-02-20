import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
	apiKey:"AIzaSyB6rUw_KY1UObdN61ni2YbdBG-M45nX7bQ",authDomain:"indie-hackers.firebaseapp.com",projectId:"indie-hackers",storageBucket:"indie-hackers.appspot.com",messagingSenderId:"761033708851",appId:"1:761033708851:web:fb54f41dc499d5a8ee1a46",measurementId:"G-LFXN33MRKC"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp
