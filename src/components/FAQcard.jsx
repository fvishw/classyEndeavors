import React, { useState } from "react";
import minus from "../assets/faq/minus.png";
import plus from "../assets/faq/plus.png";

function FAQcard({ que, ans }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`lg:w-[75%] w-[90%]  text-white  my-4 rounded-3xl transition-all duration-300 mx-auto  ${
        isOpen
          ? "lg:h-[264px] h-68 shadow-[5px_5px_10px_2px_#CF28B066] "
          : "lg:h-[100px]"
      }`}
    >
      {/* Question Section */}
      <div
        className="lg:w-[100%] lg:h-[100px] h-20 px-11 flex justify-between items-center  bg-classyBlue rounded-3xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="font-semibold font-primary text-base lg:text-xl">
          {que}
        </h2>
        <button className="lg:text-xl text-base">
          {isOpen ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
        </button>
      </div>

      {/* Answer Section - Expands on Click */}
      <div
        className={` lg:w-[100%] transition-all duration-300 overflow-hidden  ${
          isOpen
            ? "opacity-100 lg:mt-8 lg:px-11 mt-6 px-4  text-classyBlue  "
            : "max-h-0 opacity-0"
        }`}
      >
        <p className="font-primary text-sm md:text-lg lg:text-lg">{ans}</p>
      </div>
    </div>
  );
}

export default FAQcard;
