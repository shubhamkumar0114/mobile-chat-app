import React from "react";
import { useState } from "react";
import { useAuth } from "../contextApi/useAuth";
import { IoSendSharp } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import { handleSendMsg } from "../Api/api";
const InputSendMessage = () => {
  const [message, setMessage] = useState("");
  const [authUser, selectedUser, setSelectedUser] = useAuth();
 
  const handleSendMessage = async() => {
    try {
      const token = localStorage.getItem("token");
      await handleSendMsg(selectedUser, message , token);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="flex text-white items-center gap-2 px-2 mx-2 border border-zinc-700 rounded-full">
      <input type="file" hidden name="" id="fileopen" />
      <button className=" text-[1.2rem] ml-2 rounded-full">
        <label htmlFor="fileopen" className="cursor-pointer">
          <FaPlusCircle />
        </label>
      </button>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type here"
        className="h-10 w-full border-none outline-none"
      />
      <button className="mr-2" onClick={handleSendMessage}>
        <IoSendSharp />
      </button>
    </div>
  );
};

export default InputSendMessage;
