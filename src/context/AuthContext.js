import React, { useContext, createContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  const value = {
    currentUser,
    login,
    singup,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
