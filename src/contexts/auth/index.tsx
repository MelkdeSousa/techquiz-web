import React, { useState, createContext, useEffect, useContext } from 'react'

import { IAuthContext, IDataRegister } from '../../@types'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, userChanged } from '../../services/firebase/auth'

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => 
      userChanged(user => {
        setUser(user)
        setLoading(false)
    }))()
  }, [])

  async function register({
    email: userEmail,
    password: userPassword,
  }: IDataRegister) {
    try {
      const { user } = await createUserWithEmailAndPassword(userEmail, userPassword)
      
      setUser(user)
    } catch(err) {
      console.log(err)
    }
  }

  async function login({
    email: userEmail,
    password: userPassword,
  }: IDataRegister) {
    try {
      const { user } = await signInWithEmailAndPassword(userEmail, userPassword)

      setUser(user)
    } catch(err) {
      console.log(err)
    }
  }

  async function logout() {
    await signOut()
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        register,
        login,
        logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
