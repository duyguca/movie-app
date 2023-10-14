import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";

import Logo from "./Logo";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  console.log({ menuOpen });

  return (
    <header className="p-0 flex items-center justify-between md:px-14 ">
      <Link to="/">
        <Logo className="" />
      </Link>
      <nav className="main-nav text-white  text-xl hidden md:flex">
        <div
          className={`relative group mr-16 ${
            location.pathname === "/about" ? "border-b border-b-red-700" : ""
          }`}
        >
          <Link to="/about">
            <button className="">About</button>
            <span
              className={`inline-block w-0 h-[1px] bg-red-700 absolute left-0 bottom-0 duration-700 group-hover:w-full ease-in-out `}
            ></span>
          </Link>
        </div>
        <div
          className={`relative group  ${
            location.pathname === "/favourites" ? "border-b border-red-700" : ""
          }`}
        >
          <Link to="/favourites">
            <button className="">Favourite</button>
            <span
              className={`inline-block w-0 h-[1px] bg-red-700 absolute left-0 bottom-0 duration-700 group-hover:w-full ease-in-out `}
            ></span>
          </Link>
        </div>
      </nav>
      <button className=" pr-2 block md:hidden" onClick={toggleMenu}>
        <RxHamburgerMenu size={35} className="text-white" />
      </button>
      <div
        className={`bg-[#0a0b0d] w-full h-full bg-0a0b0d z-[100000] absolute top-0 left-0 flex flex-col items-center text-center md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={toggleMenu}
        >
          <TfiClose size={35} />
        </button>
        <Link to="/">
          <button
            className="text-white text-2xl font-light mt-20 border-b-[1px]"
            onClick={toggleMenu}
          >
            Home
          </button>
        </Link>
        <Link to="/about">
          <button
            className="text-white text-2xl font-light mt-4 border-b-[1px]"
            onClick={toggleMenu}
          >
            About
          </button>
        </Link>
        <Link to="/favourites">
          <button
            className="text-white text-2xl font-light mt-4 border-b-[1px] "
            onClick={toggleMenu}
          >
            Favourite
          </button>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
