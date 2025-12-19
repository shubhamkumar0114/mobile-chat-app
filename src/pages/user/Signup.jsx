import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../Api/api";
import { toast } from "react-toastify";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      phone,
      password,
    };

    const res = await register(user);
    if(res){
      toast.success(res.msg);
    }
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
  };
  return (
    <div>
      <div className="mockup-phone h-screen bg-zinc-900">
        <div className="mockup-phone-camera"></div>
        <div className="mockup-phone-display text-white grid bg-neutral-900">
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content w-full flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-xl font-bold">Signup now!</h1>
              </div>
              <div className="card w-full ">
                <div className="">
                  <form action="" onSubmit={handleOnSubmit}>
                    <fieldset className="fieldset">
                      <label className="label">Name</label>
                      <input
                        type="text"
                        value={name}
                        className="input rounded-lg"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                      />
                      <label className="label">Email</label>
                      <input
                        type="email"
                        className="input rounded-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                      />
                      <label className="label">Phone</label>
                      <input
                        type="number"
                        className="input rounded-lg"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone"
                      />
                      <label className="label">Password</label>
                      <input
                        type="password"
                        className="input rounded-lg"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className="flex justify-between items-center px-2">
                        <Link className="link link-hover">
                          Forgot password?
                        </Link>
                        <Link to={"/login"} className="link link-hover mr-4">
                          Login
                        </Link>
                      </div>
                      <input
                        type="submit"
                        value={"Signup"}
                        className="btn mt-4"
                      />
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
