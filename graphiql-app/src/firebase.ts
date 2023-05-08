import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

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

export { auth }
