import React from 'react'
import { useAuth } from '../contextApi/useAuth';
import { IoCallOutline } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";
const MessageNav = () => {
    const [authUser, selectedUser , setSelectedUser] = useAuth();
  return (
    <div>
      <div className="navbar bg-base-100 shadow-md pr-6 ">
        <div className="flex-1 flex items-center gap-0">
          <a className="pl-4 text-xl">
            <div className="avatar avatar-online avatar-placeholder">
              <div className="bg-neutral text-neutral-content w-8 rounded-full">
                <span className="text-xl text-blue-600">{selectedUser?.name[0]}</span>
              </div>
            </div>
          </a>
          <div className='pl-2 flex flex-col gap-0 mt-2'>
            <h2 className='text-gray-300 text-[0.8rem]'>{selectedUser?.name}</h2>
            <small className='text-gray-400'>active</small>
          </div>
        </div>
        <div className="flex items-center gap-6 ">
          <button className="  text-white text-[1.2rem]">
            <IoCallOutline />
          </button>
          <button className=" text-white text-[1.3rem]">
            <CiVideoOn />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MessageNav
