import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from './firebase';
import { createUser } from './db';

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

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const handleUser = async (rawUser) => {
    if (rawUser) {
      const user = await formatUser(rawUser);
      const { token, ...userWithoutToken } = user;

      createUser(user.uid, userWithoutToken);
      setUser(user);

      setLoading(false);
      return user;
    } else {
      setUser(false);

      setLoading(false);
      return false;
    }
  };

  const signinWithGithub = () => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => {
        handleUser(response.user);
      });
  };

  const signout = () =>{
    return firebase
    .auth()
    .signOut()
    .then(() => handleUser(false));
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithGithub,
    signout
  }
}

const formatUser = async (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  };
}
