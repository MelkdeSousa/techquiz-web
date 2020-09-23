import firebase from '../../config/firebase'

export function createUserWithEmailAndPassword(email: string, password: string) {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export function signInWithEmailAndPassword(email: string, password: string) {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

export function signOut() {
	return firebase.auth().signOut()
}

export function userChanged(func: (a: firebase.User | null) => any) {
  return firebase.auth().onAuthStateChanged(func)
}
