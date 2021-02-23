import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDYYILmNGgv5GRX2FyQMfUTBB-D4Jh6uW8",
  authDomain: "netflix-clone-d32e6.firebaseapp.com",
  databaseURL: "https://netflix-clone-d32e6.firebaseio.com",
  projectId: "netflix-clone-d32e6",
  storageBucket: "netflix-clone-d32e6.appspot.com",
  messagingSenderId: "461889082650",
  appId: "1:461889082650:web:7043ca8bb56639111588a3"
};

const firebase = Firebase.initializeApp(config);
//seedDatabase(firebase);
export { firebase };