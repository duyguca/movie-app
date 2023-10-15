import React from "react";
import { Link } from "react-router-dom";
import { CiInstagram, CiFacebook, CiMail } from "react-icons/ci";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between items-center">
        <div>
          <Link to="/">
            <Logo className=" max-w-[75px]   md:ml-14" />
          </Link>
        </div>
        <div className="flex">
          <a href="www.instagram.com">
            <CiInstagram
              size={30}
              className="text-white mx-2 hover:text-red-700 transition-all duration-500"
            />
          </a>
          <a href="www.facebook.com">
            <CiFacebook
              size={30}
              className="text-white mx-2  hover:text-red-700 transition-all duration-500 "
            />
          </a>
          <a href="www.gmail.com">
            <CiMail
              size={30}
              className="text-white mx-2  hover:text-red-700 transition-all duration-500"
            />
          </a>
        </div>
        <div className="flex ">
          <Link to="/about">
            <button className="text-white text-md font-light mr-3 md:mr-4 text-right hover:text-red-500 transition-all duration-500 ">
              About
            </button>
          </Link>
          <Link to="/favourites">
            <button className="text-white text-md font-light mr-1 md:mr-14 text-right hover:text-red-500 transition-all duration-500">
              Favourite
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
