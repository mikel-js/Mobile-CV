import firebase from 'firebase'
import { toast } from './toast'

const config = {
    apiKey: "AIzaSyCRDmLvqLfLS31TRJ5Tjc2eX7RkiHqwSAA",
    authDomain: "onlinecv-de01a.firebaseapp.com",
    projectId: "onlinecv-de01a",
    storageBucket: "onlinecv-de01a.appspot.com",
    messagingSenderId: "272476476843",
    appId: "1:272476476843:web:b08857e7c77fc2720b2eee"
}

firebase.initializeApp(config)

// for logging in function
export async function loginUser(username: string, password: string) {
  try {
    const res = await firebase.auth().signInWithEmailAndPassword(username, password)
    return true
  } catch(err) {
    toast(err.message)
      return false
  }
}

// for logout function
export async function logoutUser() {
  try {
    const res = await firebase.auth().signOut()
    return true
  } catch(err) {
    toast(err.message)
      return false
  }
}

export async function registerUser(username: string, password: string) {
    try {
      const res = await firebase.auth().createUserWithEmailAndPassword(username, password)
     console.log(res)
     return true
    } catch(err) {
        toast(err.message)
        return false
    }
  }