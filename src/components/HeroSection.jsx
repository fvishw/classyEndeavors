import React from "react";
import rightIcon from "../assets/heroSection/right.png";
import cloudIcon from "../assets/heroSection/cloudUpload.png";
import magicIcon from "../assets/heroSection/magicIcon.png";
function HeroSection() {
  return (
    <div>
      <div className="w-[898px] m-auto mt-[60px]">
        <p className="font-primary font-bold text-6xl text-center">
          AI-Powered Unified Platform;{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lightBlueGrad to-classyBlue">
            Create{" "}
          </span>
          Effortlessly
        </p>
      </div>
      <div className="w-[1067px] h-[107px] mt-10  m-auto  text-center p-2 ">
        <p className="font-primary text-[19px]">
          Fast, Smart & Secure –Works with Google Drive, Dropbox, Salesforce &
          Your Favorite Business Tools
        </p>
        <div className="mt-7">
          <ul className="flex items-center justify-center gap-3">
            <img src={rightIcon} alt="" />
            <li>ESIGN Compliant</li>
            <img src={rightIcon} alt="" />
            <li>UETA Approved</li>
            <img src={rightIcon} alt="" />
            <li>eIDAS Certified</li>
          </ul>
        </div>
      </div>
      {/* upload section */}
      <div className="w-[707px] h-[63px] mt-10 m-auto flex items-center justify-between">
        <div className="w-[484px] h-full rounded-4xl border-2 border-black flex items-center justify-between">
          <p className="ml-7">Drop your file here</p>
          <button className=" w-[149px] h-[47px] bg-classyBlue text-white  flex items-center justify-center m-2  py-3 rounded-4xl">
            {" "}
            <img src={cloudIcon} className="mr-1.5" alt="" />
            Upload File
          </button>
        </div>
        <p>OR</p>
        <button className="w-[181px] h-[47px] bg-classyBlue text-white rounded-4xl flex items-center justify-center">
          <img className="mr-2" src={magicIcon} alt="" />
          Generate with AI
        </button>
      </div>
      <div className="w-[704px] h-[681px]  mt-10 m-auto shadow-[5px_5px_10px_rgba(229,170,222,1)] rounded-2xl border-1 border-black "></div>
    </div>
  );
}

export default HeroSection;
