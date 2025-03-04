import React from "react";

function PlanCard({ title, price, features, isFree }) {
  return (
    <div
      className={`w-[371px] h-[535px]   p-6 border-1 font-primary flex flex-col justify-between shadow-[5px_5px_10px_rgba(229,170,222,1)]  ${
        isFree
          ? "bg-white text-classyBlue border-black"
          : "bg-classyBlue text-white border-classyBlue"
      }`}
    >
      <div className="p-6.5 ">
        <h2 className="text-xl font-semibold ">{title}</h2>

        <p className="mt-2">
          USD <span className="text-3xl font-bold">{price}</span>/Month
        </p>

        <ul className="mt-9 space-y-2 ">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-xl">
              • {feature}
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`mt-6 w-full py-2 rounded-full hover:opacity-90 transition  ${
          isFree ? "bg-classyBlue  text-white " : "bg-white text-classyBlue"
        }`}
      >
        Select Plan
      </button>
    </div>
  );
}
export default PlanCard;
