import React from "react";
import { FaFileSignature, FaLink } from "react-icons/fa";
import {
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaDiscord,
  FaRegEnvelope,
  FaRegCommentAlt,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="w-full lg:h-[128px] h-45  rounded-t-4xl bg-classyBlue mt-5 flex lg:flex-row flex-col  items-center justify-evenly lg:justify-between text-white px-3 lg:px-29">
      <div>
        <div className="lg:w-[162px] h-fit p-1 mt-2 lg:mt-0 flex justify-center items-center gap-x-1">
          {/* <img className="w-[25px]" src={docIcon} alt="" /> */}
          <FaFileSignature className="lg:h-8 lg:w-9 h-8 block w-7 text-white" />
          <p className="font-secondary font-bold text-xl lg:text-2xl ">
            DocuTech
          </p>
        </div>
        <p className="hidden lg:block">Powered by Classy Endeavors</p>
      </div>
      <div className="flex flex-col   lg:justify-center items-center lg:items-end mt-3">
        <div className="lg:w-[233px] w-[70%] justify-between flex items-center p-1 border-b-1 border-white pb-2">
          <a href="#" className="text-white hover:text-sunYellow transition">
            <FaWhatsapp className="w-4 h-4" />
          </a>
          <a href="#" className="text-white hover:text-sunYellow transition">
            <FaFacebook className="w-4 h-4" />
          </a>
          <a href="#" className="text-white hover:text-sunYellow transition">
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a href="#" className="text-white hover:text-sunYellow transition">
            <FaDiscord className="w-4 h-4" />
          </a>
          <a href="#" className="text-white hover:text-sunYellow transition">
            <FaRegEnvelope className="w-4 h-4" />
          </a>
          <a href="#" className="text-white hover:text-sunYellow transition">
            <FaRegCommentAlt className="w-4 h-4" />
          </a>
        </div>
        <div className="px-2">
          <ul className="font-primary text-sm text-center lg:text-base gap-x-3 mt-2  lg:gap-5 text-white flex">
            <li className="hover:cursor-pointer">Features</li>
            <li className="hover:cursor-pointer">Why Choose Us</li>
            <li className="hover:cursor-pointer">Pricing</li>
            <li className="hover:cursor-pointer">FAQ</li>
            <li className="hover:cursor-pointer">Legal terms</li>
            <li className="hover:cursor-pointer">Privacy policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
