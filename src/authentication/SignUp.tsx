import {
  UserCircleIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [ispassword, setIsPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const createAccount = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const getAccount = {
      username: username,
      password: password,
    };
    if(!username.trim() && !password.trim()){
        alert('username && password cant empty!')
    }
    else if(!username.trim()){
        alert("username cant empy!")
    }

    else if(!password.trim()){
        alert("password cant empty!")
    }
    else if(username.length >8){
      alert("username only 9 max character")
    }
    else{
        const accountToString = JSON.stringify(getAccount);
        localStorage.setItem("account", accountToString);
        navigate("/login");
    }
  };
  
  const handlePassword = () => {
    setIsPassword((prevState) => !prevState);
  };

  return (
    <div className="border-2 border-black  bg-gray-200">
      <div className="flex justify-center items-center h-[100vh] m-auto  ">
        <div className="border-2 border-black rounded-lg p-6 sm:p-10  bg-white">
          <p className="text-2xl font-serif font-bold mb-7 text-center ">
            Sign Up
          </p>
          <form onSubmit={createAccount} className="text-center">
            <div className="flex justify-center">
              <UserCircleIcon className="w-6 text-gray-500 mr-[-30px] z-10" />
              <input
                type="text"
                className="border-b-2 border-gray-400 h-14 rounded-md pl-12"
                placeholder="Type your Username"
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
    
              <button type="submit" className="bg-cyan-600 w-full text-white mt-24 p-2 rounded-lg mb-4 cursor-pointer">Daftar</button>
        
          </form>
          <Link
            to="/login"
            className="text-blue-500 hover:text-blue-800 cursor-pointer flex justify-center"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
