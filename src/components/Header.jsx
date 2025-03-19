import React from "react";
import { FaDiscord } from "react-icons/fa";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { FaFileSignature } from "react-icons/fa";

function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className="w-full  bg-classyBlue md:h-[49px] p-1 flex justify-center items-center font-secondary font-bold text-white text-sm  md:text-xl ">
        No Sign up required
      </div>

      <div className="w-[85%] mt-5  lg:mt-9 m-auto flex justify-between items-center">
        {/* left-navbar */}
        <div className="flex items-center md:flex-nowrap">
          {/* <img className="w-[25px]" src={docIcon} alt="document Icon" /> */}
          <FaFileSignature className="lg:h-8 lg:w-10 h-7 w-7 text-classyBlue" />
          <div className="font-secondary text-base md:text-2xl font-bold text-classyBlue ml-1">
            DocuTech
          </div>
        </div>
        {/* hamburger menu */}
        <div className="lg:hidden">
          <Hamburger
            color="#254a76"
            size={22}
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
        {isOpen && (
          <div className="absolute top-[125px] left-0 w-[100%] bg-classyBlue shadow-md lg:hidden">
            <ul className="flex flex-col p-4 space-y-2 text-white text-center">
              <a href="#features">Features</a>
              <a href="#why-choose-us">Why Choose Us</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
            </ul>
          </div>
        )}
        {/* center navbar */}
        <div className="hidden lg:block w-[409px]  font-primary text-black">
          <ul className="flex justify-between flex-wrap">
            <a href="#features">Features</a>
            <a href="#why-choose-us">Why Choose Us</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </ul>
        </div>
        {/* right navbar */}
        <div className="hidden lg:flex items-center">
          <div>
            {/* <img src={discordLogo} alt="" /> */}
            <FaDiscord className="h-10 w-10 text-classyBlue" />
          </div>
          <div>
            <button className="bg-classyBlue text-white font-primary py-2 px-4 rounded-lg ml-5 text-sm hover:cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
