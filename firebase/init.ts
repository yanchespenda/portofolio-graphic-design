// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps, deleteApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzz5GOwnh82ZpFNKjz4VaPAl9pO0mQsQE",
  authDomain: "project-portofolio.firebaseapp.com",
  projectId: "project-portofolio",
  storageBucket: "project-portofolio.appspot.com",
  databaseURL: "https://project-portofolio-default-rtdb.asia-southeast1.firebasedatabase.app/",
  messagingSenderId: "392319961699",
  appId: "1:392319961699:web:c8dfd127444ea6dcf98656",
  measurementId: "G-XKJ5LWESKY"
}

export const firebaseApp = () => {
  if (!getApps.length) {
    return initializeApp(firebaseConfig)
  } else {
    return getApp()
  }
}
export const firebaseAnalytics = () => getAnalytics(firebaseApp())
export const firebaseReset = () => deleteApp(firebaseApp())
export const hostname = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : ''