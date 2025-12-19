import React from "react";
import Search from "../components/Search";
import User from "../components/User";
import { handleGetAllUser } from "../Api/api.js";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../contextApi/useAuth.jsx";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [authUser, selectedUser , setSelectedUser] = useAuth();

  useEffect(() => {
    const allUser = async () => {
      const res = await handleGetAllUser(authUser);
      if (res) {
        setUsers(res);
      }
    };
    allUser();
  }, []);

  const filteruser = users?.filter(
    (user) =>
      user.name && user.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectedUser = (user)=> {
    localStorage.setItem("seletuser", JSON.stringify(user));
    setSelectedUser(user)
  }
  return (
    <div className="">
      <Search setSearch={setSearch} />
      <div>
        <h1 className="font-semibold mb-2">Chats</h1>
        <div
          className="space-y-3 scroll-bar"
          style={{ height: "64vh", overflowY: "scroll" }}
        >
          {filteruser?.map((user) => (
            <div key={user._id} onClick={() => handleSelectedUser(user)}>
              <User user={user} />
              <User user={user} />
              <User user={user} />
              <User user={user} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
