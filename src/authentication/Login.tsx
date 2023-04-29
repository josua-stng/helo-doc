import {
  UserCircleIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [ispassword, setIsPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const getAccount = localStorage.getItem("account");
  let account: { username: string; password: string } | null = null;

  if (getAccount !== null) {
    account = JSON.parse(getAccount);
  }
  const isAccount = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username !== account?.username && password !== account?.password) {
      Swal.fire("Oopss!", "Username & Password wrong!", "warning");
    } else if (
      username !== account?.username ||
      password !== account?.password
    ) {
      Swal.fire("Oopss!", "Username or Password wrong!", "info");
    } else if (
      username === account?.username &&
      password === account?.password
    ) {
      navigate("/");
    }
  };

  const handlePassword = () => {
    setIsPassword((prevState) => !prevState);
  };

  return (
    <div className="border-2 border-black  bg-gray-200">
      <Link to="/" className="bg-gray-500 text-slate-100 px-5 py-2 rounded-md ml-5 absolute mt-5 hover:bg-gray-600">
        Back
      </Link>
      <div className="flex justify-center items-center h-[100vh] m-auto ">
        <div className="border-2 border-black rounded-lg p-6 sm:p-10  bg-white">
          <p className="text-2xl font-serif font-bold mb-7 text-center ">
            Login
          </p>
          <form onSubmit={isAccount} className="text-center">
            <div className="flex justify-center">
              <UserCircleIcon className="w-6 text-gray-500 mr-[-30px] z-10" />
              <input
                type="text"
                className="border-b-2 border-gray-400 h-14 rounded-md pl-12"
                placeholder="Type your Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>

            <div className="flex justify-center mt-10 items-center">
              <div className="flex">
                <LockClosedIcon className="w-6 text-gray-500 mr-[-30px] z-10" />
                <input
                  type={ispassword ? "text" : "password"}
                  className="border-b-2 border-gray-400 h-14 rounded-md pl-12"
                  placeholder="Type your Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div onClick={handlePassword} className="cursor-pointer">
                {ispassword ? (
                  <EyeSlashIcon className="w-6 text-gray-500 ml-[-30px]" />
                ) : (
                  <EyeIcon className="w-6 text-gray-500 ml-[-30px]" />
                )}
              </div>
            </div>

            <button
              type="submit"
              className="bg-cyan-600 w-full text-white mt-24 p-2 rounded-lg mb-4 cursor-pointer"
            >
              Login
            </button>
          </form>
          <Link
            to="/sign-up"
            className="text-blue-500 hover:text-blue-800 cursor-pointer flex justify-center"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
