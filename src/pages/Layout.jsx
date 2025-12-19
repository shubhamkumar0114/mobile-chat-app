import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Message from "./Message";
import Profile from "../components/Profile";
import Home from "./Home";
import Setting from "../components/Setting";

const Layout = () => {
  const [page , setPage] = useState("")
  const component = {
    profile: <Profile setPage={setPage} />,
    home: <Home/>,
    setting: <Setting/>,
    outlet: <Outlet/>
  }
  return (
    <>
      <div className="mockup-phone h-screen bg-zinc-900">
        <div className="mockup-phone-camera"></div>
        <div className="mockup-phone-display text-white grid bg-neutral-200">
          <div className=" flex gap-2 bg-zinc-900">
            <div className="w-full md:w-[36vw] px-0">
              <Navbar setPage={setPage} />
              <div className={`px-2 h-[78vh]`}>
                {page ? component[page] : <Outlet />}
              </div>
              <div className="">
                <Footer />
              </div>
            </div>
            <div className="hidden md:block md:w-full">
              <Message />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
