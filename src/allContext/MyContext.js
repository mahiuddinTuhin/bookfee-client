import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { app } from "./Authentication";
const { createContext } = require("react");
const auth = getAuth(app);
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

  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
    }
    setLoading(false);
  });
  unsubscribe(); //this line will unsubscribe the observable :-)

  const info = {
    signInWithEmail,
    categories,
    setCategories,
    loading,
    createUser,
    user,
    setUser,
  };
  return (
    <div>
      <UserContext.Provider value={info}>{children}</UserContext.Provider>
    </div>
  );
};

export default MyContext;
