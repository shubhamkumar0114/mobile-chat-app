import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleLogin } from "../../Api/api";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const user = { email, password };
    const res = await handleLogin(user);

    // save user localStorage
    if (res) {
      localStorage.setItem("user", JSON.stringify(res?.user));
      localStorage.setItem("token", JSON.stringify(res?.token));
      navigate("/");
      toast.success(res.msg);
    }

    // clear state
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <div className="hero  bg-base-200 min-h-screen">
        <div className="hero-content w-full flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-xl font-bold">Login now!</h1>
          </div>
          <div className="card  w-full">
            <div className="">
              <form action="" onSubmit={handleOnSubmit}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input rounded-lg"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input rounded-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <div className="flex justify-between items-center px-2">
                    <Link to={""} className="link link-hover">
                      Forgot password?
                    </Link>
                    <Link to={"/signup"} className="link link-hover mr-4">
                      Signup
                    </Link>
                  </div>
                  <input type="submit" value={"Login"} className="btn  mt-4" />
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
