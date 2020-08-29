import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAef1_0xhyVtkCg0GeFz5s9NEX8zmV8G0c",
    authDomain: "crown-db-69e2b.firebaseapp.com",
    databaseURL: "https://crown-db-69e2b.firebaseio.com",
    projectId: "crown-db-69e2b",
    storageBucket: "crown-db-69e2b.appspot.com",
    messagingSenderId: "1072533069769",
    appId: "1:1072533069769:web:87b0ee8662198eb3141218",
    measurementId: "G-XXDKWS5VLN"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`/users/${userAuth.uid}`)
    const snapShot = await userRef.get();

if(!snapShot.exists){
  const {displayName, email} = userAuth;
  const createdAt = new Date();

  try{
    await userRef.set({
      displayName, email, createdAt, ...additionalData
    })
  }catch(error){
    console.log('eroor creating user', error)
  }
}

return userRef;


  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoggle = () => auth.signInWithPopup(provider);
  export default firebase;