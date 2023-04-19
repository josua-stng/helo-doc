import { useState } from "react";
import ImageLogo from "../Image/wibu_doc_logo.png";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToogleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="flex justify-between py-3 px-5 items-center">
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
          <h2 className="ml-5 hover:text-red-600 cursor-pointer">Beranda</h2>
          <h2 className="ml-5 hover:text-red-600 cursor-pointer">Artikel</h2>
          <h2 className="ml-5 hover:text-red-600 cursor-pointer">Riwayat</h2>
        </div>
      </div>
      <div className="bg-red-600 px-5 py-2 rounded-lg text-white hover:bg-red-500 cursor-pointer">
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
