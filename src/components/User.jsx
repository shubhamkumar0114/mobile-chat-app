import React from 'react'
import {Link} from "react-router-dom"

const User = ({user}) => {
 
  return (
    <div>
      <div className="flex items-center hover:bg-zinc-800 justify-between  px-2 py-1 rounded-sm ">
        <Link
          to={"/message"}
          className="flex items-center  gap-4 cursor-pointer"
        >
          <div className="avatar avatar-online avatar-placeholder">
            <div className="bg-neutral text-neutral-content w-13 rounded-full ">
              <span className="text-[1.6rem] text-blue-600">
                {user?.name[0]}
              </span>
            </div>
          </div>
          {/* ************TEXT************* */}
          <div>
            <h1 className="text-[1rem] text-gray-200">{user?.name}</h1>
            <p className="text-[12px] text-gray-400">new message</p>
          </div>
        </Link>
        {/* ************RIGHT-CONTENT*************** */}
        <div className="flex flex-col gap-0">
          {/* <p className="text-[13px] text-gray-300">Today</p> */}
          <small className="text-[12px] text-gray-400">just now</small>
        </div>
      </div>
    </div>
  );
}

export default User
