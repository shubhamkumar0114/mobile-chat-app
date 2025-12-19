import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
const Profile = ({ setPage }) => {
  return (
    <div>
      <div className="flex  gap-2 items-center px-2 py-2">
        <Link onClick={() => setPage("home")}>
          {" "}
          <IoMdArrowRoundBack className="text-xl" />
        </Link>
        <h1 className="text-[1.1rem]">Profile</h1>
      </div>
      <div className="flex flex-col gap-2">
        <div className="my-8 w-[90vw] flex justify-center">
          <img
            className="w-26 rounded-full overflow-hidden "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtZToQQoYKBt0i0wXEgg0QxUjaPzDTFfreBA&s"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-y-2 text-gray-300 border border-gray-600 rounded-md px-4 py-2">
          <h1>Name: Shubham kumar</h1>
          <h1 className="wrap-break-word">Email: Shubhamkumar@gmail.com</h1>
          <p>Phone: 6299747575</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
