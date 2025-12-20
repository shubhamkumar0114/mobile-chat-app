import React from "react";
import InputSendMessage from "../components/InputSendMessage";
import { useAuth } from "../contextApi/useAuth";
import Msg from "../components/Msg";
import MessageNav from "../components/MessageNav";
import { useGetMessage } from "../contextApi/useGetMessage";

const Message = () => {
  const [authUser, selectedUser, setSelectedUser] = useAuth();
  const [chat] = useGetMessage();

  return (
    <div className="bg-zinc-900 h-screen">
      <div>
        <MessageNav />
      </div>
      <div
        style={{ height: "82vh", overflowY: "scroll" }}
        className="px-4 scroll-bar"
      >
        {chat.map((msg, index) => (
          <div key={index}>
            <Msg msg={msg} />
          </div>
        ))}
      </div>
      <div>
        <InputSendMessage />
      </div>
    </div>
  );
};

export default Message;
