import React, { useState } from "react";
import minus from "../assets/faq/minus.png";
import plus from "../assets/faq/plus.png";

function FAQcard({ que, ans }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-[1190px]  text-white  my-2 rounded-3xl transition-all duration-300 m-auto  ${
        isOpen
          ? "h-[264px] shadow-[5px_5px_10px_rgba(229,170,222,1)] "
          : "h-[100px]"
      }`}
    >
      {/* Question Section */}
      <div
        className="w-[1190px] h-[100px] px-11 flex justify-between items-center  bg-classyBlue rounded-3xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="font-bold font-primary text-xl">{que}</h2>
        <button className="text-xl">
          {isOpen ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
        </button>
      </div>

      {/* Answer Section - Expands on Click */}
      <div
        className={` w-[1190px] transition-all duration-300 overflow-hidden   ${
          isOpen
            ? "opacity-100 mt-8 px-11   text-classyBlue  "
            : "max-h-0 opacity-0"
        }`}
      >
        <p className="font-primary text-xl">{ans}</p>
      </div>
    </div>
  );
}

export default FAQcard;
