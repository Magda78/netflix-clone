import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBWIkNYrLU1nIw1yA9QcZi9flCKuyIljWo',
	authDomain: 'netflix-7da9d.firebaseapp.com',
	projectId: 'netflix-7da9d',
	storageBucket: 'netflix-7da9d.appspot.com',
	messagingSenderId: '750489987517',
	appId: '1:750489987517:web:0b5a8fa480c6f340a4cad4'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
