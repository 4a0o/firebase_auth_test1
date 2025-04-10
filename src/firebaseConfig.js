import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
	apiKey:"AIzaSyBE6knJBG6WaIOe9Wlzijixt57Yxodzwn4",authDomain:"auth.ascendex.com",projectId:"bitmax-87eb1",storageBucket:"bitmax-87eb1.appspot.com",messagingSenderId:"761033708851",appId:"1:761033708851:web:fb54f41dc499d5a8ee1a46",measurementId:"G-LFXN33MRKC"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp
