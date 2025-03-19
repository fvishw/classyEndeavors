import React from "react";

function PlanCard({ title, price, features, isFree, isYearly }) {
  const palnDuration = isYearly ? "Year" : "Month";
  return (
    <div
      className={`lg:w-[371px] w-[72%] mx-auto lg:h-[535px]   p-6 border-1 font-primary flex flex-col justify-between shadow-[5px_5px_10px_2px_#CF28B080]
  ${
    isFree
      ? "bg-white text-classyBlue border-black"
      : "bg-classyBlue text-white border-classyBlue"
  }`}
    >
      <div className="lg:p-6.5 p-4">
        <h2 className="text-xl font-semibold ">{title}</h2>

        <p className="mt-2">
          USD{" "}
          <span className="lg:text-3xl text-2xl font-bold">
            {parseInt(price)}
          </span>
          /{palnDuration}
        </p>
        {title == "Teams" && (
          <p className="mt-2 text-sm">
            Minimum total of{" "}
            <span>USD {palnDuration == "Year" ? "240" : "24"}/month</span>
          </p>
        )}
        {title == "FREE" && (
          <p className="w-[172px] h-[30px] text-xs  bg-softPurple text-center p-1 mt-2">
            No Credit Card required
          </p>
        )}

        <ul className="mt-9 space-y-2 ">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-base gap-y-2 lg:text-xl">
              • {feature}
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`mt-6 w-full py-2 rounded-full hover:opacity-90 transition hover:cursor-pointer ${
          isFree ? "bg-classyBlue  text-white " : "bg-white text-classyBlue"
        }`}
      >
        Select Plan
      </button>
    </div>
  );
}
export default PlanCard;
