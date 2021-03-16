import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDcF9NlMaCqmJrJ6guBoktmnGIuFMZ-27E',
  authDomain: 'jetblaze-express.firebaseapp.com',
  databaseURL: 'https://jetblaze-express.firebaseio.com',
  projectId: 'jetblaze-express',
  storageBucket: 'jetblaze-express.appspot.com',
  messagingSenderId: '749139277404',
  appId: '1:749139277404:web:925a9a997218cb70091899',
  measurementId: 'G-WX0WQ84SWZ',
}

// Initialize Firebase
const firebaseInit = firebase.initializeApp(firebaseConfig)

export const dbFirebase = firebaseInit.firestore()
