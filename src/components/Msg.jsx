import React from "react";
import { useAuth } from "../contextApi/useAuth";

const Msg = ({msg}) => {
  const [authUser] = useAuth();
  const sender = authUser?._id === msg?.senderId;
  const chat = sender ? "chat-end": "chat-start";
  const color = sender? "bg-gray-800 text-white" : "bg-zinc-800 text-white";

  return (
    <div>
      <div className={`chat ${chat}`}>
        <div className={`chat-bubble wrap-break-word ${color}`}>{msg?.message}</div>
      </div>
    </div>
  );
};

export default Msg;
