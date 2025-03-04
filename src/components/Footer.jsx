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
    <div className="w-full h-[128px] rounded-t-4xl bg-classyBlue mt-5 flex items-center justify-around text-white ">
      <div className="">
        <div className="w-[162px] h-fit p-1 flex justify-center items-center ">
          <img src={docIcon} alt="" />
          <p className="font-secondary font-bold text-2xl ">DocuTech</p>
        </div>
        <p>Powered by Classy Endeavors</p>
      </div>
      <div className="flex flex-col justify-center items-end mt-3">
        <div className="w-[233px]  justify-between flex items-center p-1 border-b-1 border-white pb-2">
          <img src={whatsapp} alt="" />
          <img src={facebook} alt="" />
          <img src={linkedin} alt="" />
          <img src={discord} alt="" />
          <img src={envelope} alt="" />
          <img src={message} alt="" />
        </div>
        <div className="">
          <ul className="font-primary text-base  gap-5 text-white flex">
            <li>Features</li>
            <li>Why Choose Us</li>
            <li>Pricing</li>
            <li>FAQ</li>
            <li>Legal terms</li>
            <li>Privacy policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
