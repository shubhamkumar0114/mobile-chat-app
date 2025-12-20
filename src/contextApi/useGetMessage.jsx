import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import axios from "axios";
import { handleGetMessage } from "../Api/api";

export const GetContext = createContext();

const UseGetMessage = ({ children }) => {
  const [authUser, selectedUser] = useAuth();
  const [chat, setChat] = useState([]);

  // api call get message
  useEffect(() => {
    const token = localStorage.getItem("token");
    const getMessage = async () => {
      const res = await handleGetMessage(selectedUser, token);
      if(res) setChat(res)
    };
    if(token) getMessage();
  }, []);
  return <GetContext.Provider value={[chat]}>{children}</GetContext.Provider>;
};

export default UseGetMessage;

export const useGetMessage = ()=> useContext(GetContext);
