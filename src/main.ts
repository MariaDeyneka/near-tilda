import { createApp } from 'vue'
import App from './App.vue'
// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'

import { getAnalytics } from 'firebase/analytics'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyBy0OKqHpHq-MW3xM1pTBQefryVfN1xgTk',

  authDomain: 'near-tilda.firebaseapp.com',

  projectId: 'near-tilda',

  storageBucket: 'near-tilda.appspot.com',

  messagingSenderId: '953802800231',

  appId: '1:953802800231:web:2012f2842f14cfd3a368c2',

  measurementId: 'G-0T6SCFLBP5',
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)

const analytics = getAnalytics(app)
createApp(App).mount('#app')
