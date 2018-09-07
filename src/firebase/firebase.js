import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const prodConfig = {
  apiKey: 'AIzaSyCGkL53ndG9oqKcFBqYNIaCbPTvF92Wow8',
  authDomain: 'morning-gatsby-prod.firebaseapp.com',
  databaseURL: 'https://morning-gatsby-prod.firebaseio.com',
  projectId: 'morning-gatsby-prod',
  storageBucket: 'morning-gatsby-prod.appspot.com',
  messagingSenderId: '491983476707'
}

const devConfig = {
  apiKey: 'AIzaSyBwwE7DABVeDkdYD2h5qpCGLMDidu9bIo0',
  authDomain: 'morning-gatsby-dev.firebaseapp.com',
  databaseURL: 'https://morning-gatsby-dev.firebaseio.com',
  projectId: 'morning-gatsby-dev',
  storageBucket: 'morning-gatsby-dev.appspot.com',
  messagingSenderId: '141318385556'
}

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

let db, auth

if (typeof window !== 'undefined') {
  // Gatsby build will fail otherwise
  db = firebase.database()
  auth = firebase.auth()
}

export { db, auth }
