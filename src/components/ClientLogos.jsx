import React from "react";
import ucSandiego from "../assets/logos/ucSandiego.png";
import absa from "../assets/logos/absa.png";
import b2b from "../assets/logos/b2b.png";
import howard from "../assets/logos/howard.png";
import pharm from "../assets/logos/pharm.png";
import ivi from "../assets/logos/ivi.png";

function ClientLogos() {
  return (
    <div>
      <div className="w-[706px] h-[90px] m-auto mt-10 ">
        <p className="font-primary text-3xl font-bold text-center p-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lightBlueGrad via-greyishLightBlue to-classyBlue">
            64.0k
          </span>{" "}
          businesses and individuals have signed with {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lightBlueGrad via-greyishLightBlue to-classyBlue">
            DocuTech
          </span>
        </p>
      </div>
      <div className="w-[1122px] h-[62px]   flex items-center justify-between m-auto mt-10">
        <img src={ucSandiego} alt="" />
        <img src={ivi} alt="" />
        <img src={howard} alt="" />
        <img src={pharm} alt="" />
        <img src={absa} alt="" />
        <img src={b2b} alt="" />
      </div>
    </div>
  );
}

export default ClientLogos;
