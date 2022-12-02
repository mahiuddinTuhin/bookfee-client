import {
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { app } from "./Authentication";
const { createContext } = require("react");
const auth = getAuth(app);

// auth provider for google sign in
const googleProvider = new GoogleAuthProvider();

// auth provider for facebook
const facebookProvider = new FacebookAuthProvider();

// user context to use context
export const UserContext = createContext();

const MyContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState("");
  const [user, setUser] = useState("");
  const [loggedInUser, setLoggedInUser] = useState("");

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

  // update User name
  const updateUser = (name) => {
    setLoading(true);
    return updateProfile(auth.currentUser, name);
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

  // get user token to verify authorization
  const getUserToken = (email) => {
    fetch(`https://bookfee-server.vercel.app/jwt?email=${email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
          // Navigate(from, { replace: true });
        }
      });
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
    updateUser,
    getUserToken,
    loggedInUser,
    setLoggedInUser,
  };
  return (
    <div>
      <UserContext.Provider value={info}>{children}</UserContext.Provider>
    </div>
  );
};

export default MyContext;
