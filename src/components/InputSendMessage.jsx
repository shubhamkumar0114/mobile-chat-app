import React from "react";
import { useState } from "react";
import { useAuth } from "../contextApi/useAuth";
import { IoSendSharp } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
const InputSendMessage = () => {
  const [message, setMessage] = useState("");
  const [authUser, selectedUser, setSelectedUser] = useAuth();
 
  const handleSendMessage = () => {};

  return (
    <div className="flex items-center gap-2 px-2 mx-2 mb-4 border border-zinc-700 rounded-full">
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
