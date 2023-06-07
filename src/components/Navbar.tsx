import { useState } from "react";
import ImageLogo from "../Image/wibu_doc_logo.png";
import { Bars4Icon, XMarkIcon, PowerIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const getLocalAccount = localStorage.getItem("account");
  let account: { username: string; password: string } | null = null;
  if (getLocalAccount !== null) {
    account = JSON.parse(getLocalAccount);
  }

  const handleToogleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  const logOut = () => {
    localStorage.removeItem("doctor");
    localStorage.removeItem("hospital");
    localStorage.removeItem("account");
    navigate("/");
  };
  return (
    <div className="flex justify-between py-3 px-5 items-center bg-zinc-50 sticky top-0 z-10">
      <div className="flex items-center">
        <img src={ImageLogo} alt="logo_image" />
        <button className="md:hidden  ml-2" onClick={handleToogleOpen}>
          {isOpen ? (
            <XMarkIcon className="w-7 " />
          ) : (
            <Bars4Icon className="w-7 " />
          )}
        </button>

        <div
          className={`${
            isOpen
              ? "flex fixed left-0 right-0 bottom-32 top-16 leading-7 bg-slate-200 flex-col z-10"
              : "hidden  md:flex ml-10"
          } `}
        >
          <Link to="/">
            <h2 className="ml-5 hover:text-red-600 cursor-pointer">Beranda</h2>
          </Link>
          <Link
            to="/booked-doctor"
            className="ml-5 hover:text-red-600 cursor-pointer"
          >
            Booked
          </Link>
          <Link
          to="/booked-hospital"
          className="ml-5 hover:text-red-600 cursor-pointer">Hospital</Link>
        </div>
      </div>
      {getLocalAccount === null ? (
        <Link
          to="/login"
          className="bg-red-600 px-5 py-2 rounded-lg text-white hover:bg-red-500 cursor-pointer"
        >
          <button>Login</button>
        </Link>
      ) : (
        <div className="flex">
          <PowerIcon
            onClick={logOut}
            className="w-7 mr-3 sm:mr-5 hover:cursor-pointer"
          />
          <p className="bg-blue-600 px-5 py-2 rounded-lg text-white hover:bg-blue-700 cursor-pointer">
            {account?.username}
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
