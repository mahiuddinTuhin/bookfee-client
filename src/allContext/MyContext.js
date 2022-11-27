import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { app } from "./Authentication";
const { createContext } = require("react");
const auth = getAuth(app);

// auth provider for google sign in
const googleProvider = new GoogleAuthProvider();

// auth provider for facebook
const facebookProvider = new FacebookAuthProvider();

export const UserContext = createContext();
const MyContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState("");
  const [user, setUser] = useState("");
  // function to create user with email and password
  const signInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // function for sign in with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // google sign in function
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // facebook sign in function
  const facebookSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  // signout function
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe(); //this line will unsubscribe the observable :-)
    };
  }, []);

  const info = {
    signInWithEmail,
    categories,
    setCategories,
    loading,
    createUser,
    user,
    setUser,
    logout,
    googleSignIn,
    facebookSignIn,
  };
  return (
    <div>
      <UserContext.Provider value={info}>{children}</UserContext.Provider>
    </div>
  );
};

export default MyContext;
