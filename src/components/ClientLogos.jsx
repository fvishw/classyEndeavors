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
      <div className="lg:w-[706px] lg:h-[90px] m-auto mt-10 ">
        <p className="font-primary lg:text-3xl text-xl font-bold text-center p-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lightBlueGrad via-greyishLightBlue to-classyBlue">
            64.0k
          </span>{" "}
          businesses and individuals have signed with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lightBlueGrad via-greyishLightBlue to-classyBlue">
            DocuTech
          </span>
        </p>
      </div>
      <div className="lg:w-[1122px] md:h-[62px]  flex-wrap md:flex grid grid-cols-2 gap-y-4  items-center justify-between m-auto mt-10">
        <img className="mx-auto" src={ucSandiego} alt="" />
        <img className="mx-auto" src={ivi} alt="" />
        <img className="mx-auto" src={howard} alt="" />
        <img className="mx-auto" src={pharm} alt="" />
        <img className="mx-auto" src={absa} alt="" />
        <img className="mx-auto" src={b2b} alt="" />
      </div>
    </div>
  );
}

export default ClientLogos;
