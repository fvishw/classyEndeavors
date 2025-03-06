import React from "react";
import docIcon from "../assets/navbar/docIcon.png";
import discordLogo from "../assets/navbar/Discord.png";
function Header() {
  return (
    <div>
      <div className="w-full bg-classyBlue h-[49px] flex justify-center items-center font-secondary font-bold text-white text-xl ">
        No Sign up required
      </div>

      <div className="w-[85%]  mt-9 m-auto  flex justify-between items-center">
        {/* left-navbar */}
        <div className="flex items-center ">
          <img src={docIcon} alt="document Icon" />
          <div className="font-secondary text-2xl font-bold text-classyBlue ml-2">
            DocuTech
          </div>
        </div>
        {/* center navbar */}
        <div className="w-[409px]  font-primary text-black">
          <ul className="flex justify-between">
            <li>Features</li>
            <li>Why Choose Us</li>
            <li>Pricing</li>
            <li>FAQ</li>
          </ul>
        </div>
        {/* right navbar */}
        <div className="flex items-center">
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
