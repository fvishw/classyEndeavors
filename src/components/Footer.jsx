import React from "react";
import docIcon from "../assets/footer/docIcon.png";
import discord from "../assets/footer/discord.png";
import envelope from "../assets/footer/envelope.png";
import facebook from "../assets/footer/facebook.png";
import linkedin from "../assets/footer/linkedin.png";
import message from "../assets/footer/message.png";
import whatsapp from "../assets/footer/whatsapp.png";
function Footer() {
  return (
    <div className="w-full lg:h-[128px] h-45  rounded-t-4xl bg-classyBlue mt-5 flex lg:flex-row flex-col  items-center justify-evenly lg:justify-between text-white px-3 lg:px-29">
      <div>
        <div className="lg:w-[162px] h-fit p-1 w-9 mt-2 lg:mt-0 flex justify-center items-center gap-x-1">
          <img className="w-[25px]" src={docIcon} alt="" />
          <p className="font-secondary font-bold text-xl lg:text-2xl ">
            DocuTech
          </p>
        </div>
        <p className="hidden lg:block">Powered by Classy Endeavors</p>
      </div>
      <div className="flex flex-col   lg:justify-center items-center lg:items-end mt-3">
        <div className="lg:w-[233px] w-[70%] justify-between flex items-center p-1 border-b-1 border-white pb-2">
          <img className="hover:cursor-pointer " src={whatsapp} alt="" />
          <img className="hover:cursor-pointer " src={facebook} alt="" />
          <img className="hover:cursor-pointer " src={linkedin} alt="" />
          <img className="hover:cursor-pointer " src={discord} alt="" />
          <img className="hover:cursor-pointer " src={envelope} alt="" />
          <img className="hover:cursor-pointer " src={message} alt="" />
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
