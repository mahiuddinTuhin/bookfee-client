import React from "react";
const { createContext } = require("react");

export const UserContext = createContext();

const MyContext = ({ children }) => {
  const name = {
    myName: "Ali Jafor",
  };
  return (
    <div>
      <UserContext.Provider value={name}>{children}</UserContext.Provider>
    </div>
  );
};

export default MyContext;
