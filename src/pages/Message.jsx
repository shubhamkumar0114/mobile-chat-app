import React from "react";
import InputSendMessage from "../components/InputSendMessage";
import { useAuth } from "../contextApi/useAuth";
import Msg from "../components/Msg";
import MessageNav from "../components/MessageNav";

const Message = () => {
  const [authUser, selectedUser, setSelectedUser] = useAuth();

  return (
    <div className="">
      <div className="mockup-phone h-screen ">
        <div className="mockup-phone-display text-white grid bg-neutral-900">
          <div>
            <MessageNav />
          </div>
          <div
            style={{ height: "75vh", overflowY: "scroll" }}
            className="px-4 scroll-bar"
          >
            <div>
              <Msg />
            </div>
          </div>
          <div>
            <InputSendMessage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
