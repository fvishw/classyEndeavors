import React, { useState, useEffect } from "react";
import rightIcon from "../assets/heroSection/right.png";
import cloudIcon from "../assets/heroSection/cloudUpload.png";
import magicIcon from "../assets/heroSection/magicIcon.png";
import ShadowGradient from "./ShadowGradient";

function HeroSection() {
  return (
    <div>
      <div className="lg:w-[898px]  w-[90%] m-auto mt-6 lg:mt-[60px]">
        <h1 className="font-primary font-bold lg:text-5xl text-3xl text-center  flex flex-col items-center">
          AI-Powered Unified Platform;{" "}
          <div className="flex justify-end max-w-2xl gap-3.5 mx-auto ">
            <span className="animate-text-change pb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-lightBlueGrad to-classyBlue"></span>{" "}
            <span>Effortlessly</span>
          </div>
        </h1>
      </div>
      <div className="lg:w-[1067px] w-[85%]  lg:h-[107px]  lg:mt-10  mx-auto  text-center p-2 ">
        <p className="font-primary text-sm lg:text-lg">
          Fast, Smart & Secure –Works with Google Drive, Dropbox, Salesforce &
          Your Favorite Business Tools
        </p>
        <div className="mt-7 ">
          <ul className=" flex flex-wrap items-center justify-center gap-5 text-sm">
            <div className="flex gap-2">
              <img src={rightIcon} alt="" />
              <li>ESIGN Compliant</li>
            </div>
            <div className="flex gap-2">
              <img src={rightIcon} alt="" />
              <li>UETA Approved</li>
            </div>
            <div className="flex gap-2">
              <img src={rightIcon} alt="" />
              <li>eIDAS Certified</li>
            </div>
          </ul>
        </div>
      </div>
      {/* upload section */}
      <div className="w-[707px] h-[63px] hidden   mt-10 m-auto md:flex items-center justify-between">
        <form className="w-[484px] h-full rounded-4xl border-1 border-black flex items-center justify-between">
          <p className="ml-7">Drop your file here</p>
          <button className=" w-[149px] h-[47px] bg-classyBlue text-white  flex items-center justify-center m-2  py-3 rounded-4xl hover:cursor-pointer">
            {" "}
            <img src={cloudIcon} className="mr-1.5" alt="" />
            Upload File
          </button>
        </form>
        <p>OR</p>
        <button className="w-[181px] h-[47px] bg-classyBlue text-white rounded-4xl flex items-center justify-center hover:cursor-pointer">
          <img className="mr-2" src={magicIcon} alt="" />
          Generate with AI
        </button>
      </div>
      {/* mobile upload section */}
      <div className=" flex md:hidden items-center  mx-auto justify-between w-[72%] text-sm mt-7">
        <button className=" w-[149px] h-[47px] bg-classyBlue text-white   flex items-center justify-center  py-2 px-1 rounded-4xl hover:cursor-pointer">
          {" "}
          <img src={cloudIcon} className="mr-1" alt="" />
          Upload File
        </button>
        <p className="mx-2">OR</p>
        <button className="w-[181px] h-[47px] bg-classyBlue text-white rounded-4xl flex items-center justify-center  hover:cursor-pointer">
          <img className="mr-2" src={magicIcon} alt="" />
          Generate with AI
        </button>
      </div>
      <div className="lg:w-[704px] w-[95%] h-96 lg:h-[681px]  mt-10 m-auto shadow-[5px_5px_10px_2px_#CF28B040] rounded-2xl border-1 border-black z-10 bg-white"></div>
    </div>
  );
}

export default HeroSection;
