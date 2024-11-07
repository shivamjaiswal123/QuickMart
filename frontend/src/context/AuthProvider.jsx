import React, { useState } from "react";
import AuthContext from "./AuthContext";

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [bagSize, setBagSize] = useState(0);
  const [bagItems, setBagItems] = useState([]);
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        bagSize,
        setBagSize,
        bagItems,
        setBagItems
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
