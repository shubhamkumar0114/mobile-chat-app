import "./App.css";
import Stories from "./components/story/Stories";
import Meeting from "./components/meeting/Meeting";
import Calls from "./components/call/Calls";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";

import { Routes, Route } from "react-router-dom";
import Message from "./pages/Message";
import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";

function App() {
  return (
    <>
      <div className="">
        <ToastContainer position="top-right" />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="stories" element={<Stories />} />
            <Route path="meeting" element={<Meeting />} />
            <Route path="call" element={<Calls />} />
          </Route>
          <Route path="/message" element={<Message />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
