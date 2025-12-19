import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState(
    JSON.parse(localStorage.getItem("seletuser"))
  );
  const [authUser, setAuthUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : undefined
  );

  return (
    <AuthContext.Provider value={[authUser, selectedUser, setSelectedUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
