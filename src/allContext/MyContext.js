import React, { useState } from "react";
const { createContext } = require("react");

export const UserContext = createContext();

const MyContext = ({ children }) => {
  const [categories, setCategories] = useState("");
  const info = {
    categories,
    setCategories,
  };
  return (
    <div>
      <UserContext.Provider value={info}>{children}</UserContext.Provider>
    </div>
  );
};

export default MyContext;
