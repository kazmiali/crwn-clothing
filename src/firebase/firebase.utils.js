import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyB6tkw4dEZ_0ptrw_A-Yj2SUC8_48-qUoA',
	authDomain: 'crwn-db-1049.firebaseapp.com',
	databaseURL: 'https://crwn-db-1049.firebaseio.com',
	projectId: 'crwn-db-1049',
	storageBucket: 'crwn-db-1049.appspot.com',
	messagingSenderId: '669482266061',
	appId: '1:669482266061:web:452e43bfdb208ab1'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
