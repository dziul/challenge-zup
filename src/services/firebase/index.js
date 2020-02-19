import * as firebaseApp from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB1apvfgx3bFkXudEUoiww7QK8NdedZtt8",
  authDomain: "challence-zup.firebaseapp.com",
  databaseURL: "https://challence-zup.firebaseio.com",
  projectId: "challence-zup",
  storageBucket: "challence-zup.appspot.com",
  messagingSenderId: "572830506014",
  appId: "1:572830506014:web:cd880d55c463a765b3220f"
};

const firebase = firebaseApp.initializeApp(firebaseConfig);
export default firebase;

