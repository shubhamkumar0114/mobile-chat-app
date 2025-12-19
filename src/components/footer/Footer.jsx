import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineChat } from "react-icons/md";
import { MdHistoryToggleOff } from "react-icons/md";
import { SiGooglemeet } from "react-icons/si";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-zinc-800 rounded-md z-50 ">
      <div className="tabs tabs-border  px-2 py-3 flex justify-evenly text-white">
        <Link to={"/"}>
          <div className="flex flex-col justify-center items-center gap-[-15px]">
            <div>
              <MdOutlineChat />
            </div>
            <div className="text-white">
              <input
                type="radio"
                name="my_tabs_2"
                className="tab font-semibold text-[0.8rem]"
                aria-label="Chats"
                // defaultChecked
              />
            </div>
          </div>
        </Link>

        <Link to={"/stories"}>
          <div className="flex flex-col justify-center items-center gap-[-15px]">
            <div>
              <MdHistoryToggleOff />
            </div>
            <div className="text-white">
              <input
                type="radio"
                name="my_tabs_2"
                className="tab font-semibold text-[0.8rem]"
                aria-label="Stories"
              />
            </div>
          </div>
        </Link>

        <Link to={"/meeting"}>
          <div className="flex flex-col justify-center items-center gap-[-15px]">
            <div>
              <SiGooglemeet />
            </div>
            <div className="text-white">
              <input
                type="radio"
                name="my_tabs_2"
                className="tab font-semibold text-[0.8rem]"
                aria-label="Meeting"
              />
            </div>
          </div>
        </Link>
        <Link to={"/call"}>
          <div className="flex flex-col justify-center items-center gap-[-15px]">
            <div>
              <IoCallOutline />
            </div>
            <div className="text-white">
              <input
                type="radio"
                name="my_tabs_2"
                className="tab font-semibold text-[0.8rem]"
                aria-label="Calls"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
