import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
    {
    apiKey: "AIzaSyABdbNeUhGf9hXGjTMi8i0u4uWDyi1AoBs",
    authDomain: "ecommerce-f0528.firebaseapp.com",
    projectId: "ecommerce-f0528",
    storageBucket: "ecommerce-f0528.appspot.com",
    messagingSenderId: "399296580485",
    appId: "1:399296580485:web:e447da5338794aad5512ec",
    measurementId: "G-66DQH00X92"
  }
firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth,additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();
  if(!snapShot.exists){
    const {displayName,email} = userAuth;
    const createdAt = new Date()
    try {
      await userRef.set(
        {
          displayName,
          email,
          createdAt,
          ...additionalData
        }
      )
    } catch (error) {
        console.error(error)
    }
  }
  return userRef
}

export const auth = firebase.auth()

export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: "select_account"})
export const signInWithGoogle = () =>  auth.signInWithPopup(provider)

export default firebase;