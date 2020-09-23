import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

import credentials from './credentials'

export default firebase.initializeApp(credentials)
