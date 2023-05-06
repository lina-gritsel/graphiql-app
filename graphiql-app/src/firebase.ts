import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import {
  getFirestore,
  collection,
  addDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCmmY1iAgJIagUsVL3wi4RZ7BrJlF5_RCA',
  authDomain: 'graphiql-b9b10.firebaseapp.com',
  projectId: 'graphiql-b9b10',
  storageBucket: 'graphiql-b9b10.appspot.com',
  messagingSenderId: '482032547935',
  appId: '1:482032547935:web:1afb73d8352f7b300783ea',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (err) {
    console.error(err)
  }
}

const registerWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      authProvider: 'local',
      email,
    })
  } catch (err) {
    console.error(err)
  }
}

const logout = () => {
  signOut(auth)
}

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
}
