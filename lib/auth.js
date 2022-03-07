import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from './firebase'
import { getAuth, signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth";

// Context

const authContext = createContext()

export function AuthProvider ({children}){
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}

//auth function

function useProvideAuth(){

  const [user, setUser] = useState(null)

  const auth = getAuth();

  function signinWithGithub(){
    signInWithPopup(auth, new GithubAuthProvider())
    .then((result) => {
      const user = result.user;
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken
      console.log(token)
      setUser(user)
      return user
    })
    .catch(err => console.log(err))
  }

  const signout = () =>{
    signOut(auth)
      .then(() => {
        setUser(false)
      })
    .catch(err => console.log(err))
  }

  // useEffect(()=>{
  //   const unsubscribe = firebase.getApps().onAuthStateChanged((user) => {
  //     if(user){
  //       setUser(user)
  //     } else {
  //       setUser(false)
  //     }
  //   })

  //   return () => unsubscribe()
  // })

  return {
    user,
    signinWithGithub,
    signout
  }
}
