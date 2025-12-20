import axios from "axios";
import { toast } from "react-toastify";

const API = axios.create({
  baseURL: "http://localhost:2001/api",
  withCredentials: true,
});

// User Register
export const register = async (formData) => {
  try {
    const res = await API.post("/user/register", formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
        "Content-Type": "application/json",
      },
    });
    if (res) return res.data;
  } catch (error) {
    toast.error(error?.response?.data.error);
  }
};

// User Login
export const handleLogin = async (data) => {
  try {
    const res = await API.post("/user/login", data, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res) return res?.data;
  } catch (error) {
    toast.error(error?.response?.data.error);
  }
};

// User Logout
export const handleLogout = async () => {
  try {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast.success("Logout success");
  } catch (error) {
    toast.error(error?.response?.data.error);
  }
};

// get all users
export const handleGetAllUser = async (authuser) => {
  try {
    const res = await API.post(`/user/allusers/${authuser?._id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res) return res?.data;
  } catch (error) {
    toast.error(error?.response?.data.error);
  }
};

// send msg
export const handleSendMsg = async (selectedUser, message , token) => {
  // console.log(authuser._id , selectedUser._id , message)
  const res = await API.post(
    `/message/sendmessage/${selectedUser?._id}`,
    { message },
    {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  console.log(res)
};

// receive msg
export const handleGetMessage = async(selectedUser,token)=> {
  const res = await API.get(`message/receivermessage/${selectedUser?._id}`, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if(res) return res.data;
}