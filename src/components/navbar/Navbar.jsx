import React from 'react'
import { Link } from 'react-router-dom';
import { handleLogout } from '../../Api/api';
import { CgProfile } from "react-icons/cg";

const Navbar = ({ setPage }) => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-2 pt-2">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-[1rem] text-gray-400">
            Whatsapps
          </Link>
        </div>
        <div className="flex gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="">
                <CgProfile className="text-[1.3rem] text-gray-400" />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-50 p-2 shadow"
            >
              <li>
                <a
                  className="justify-between"
                  onClick={() => setPage("profile")}
                >
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a onClick={() => setPage("setting")}>Settings</a>
              </li>
              <li onClick={handleLogout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar
