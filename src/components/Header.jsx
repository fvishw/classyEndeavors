import React from "react";
import docIcon from "../assets/navbar/docIcon.png";
import discordLogo from "../assets/navbar/Discord.png";
import { useState } from "react";
import Hamburger from "hamburger-react";
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
          <img className="w-[25px]" src={docIcon} alt="document Icon" />
          <div className="font-secondary text-base md:text-2xl font-bold text-classyBlue ml-2">
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
              <li className="hover:cursor-pointer hover:text-gray-300">
                Features
              </li>
              <li className="hover:cursor-pointer hover:text-gray-300">
                Why Choose Us
              </li>
              <li className="hover:cursor-pointer hover:text-gray-300">
                Pricing
              </li>
              <li className="hover:cursor-pointer hover:text-gray-300">FAQ</li>
            </ul>
          </div>
        )}
        {/* center navbar */}
        <div className="hidden lg:block w-[409px]  font-primary text-black">
          <ul className="flex justify-between flex-wrap">
            <li className="hover:cursor-pointer">Features</li>
            <li className="hover:cursor-pointer">Why Choose Us</li>
            <li className="hover:cursor-pointer">Pricing</li>
            <li className="hover:cursor-pointer">FAQ</li>
          </ul>
        </div>
        {/* right navbar */}
        <div className="hidden lg:flex items-center">
          <div>
            <img src={discordLogo} alt="" />
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
