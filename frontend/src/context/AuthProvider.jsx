import React, { useState, createContext, useContext } from "react";

const Auth = createContext()

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  return (
    <Auth.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </Auth.Provider>
  );
}

export default AuthProvider;

export const AuthState = () => {
  return useContext(Auth);
}