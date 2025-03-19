import React from "react";

function FeatureCard({ title, isFirst }) {
  return (
    <div
      className={`md:w-[427px] w-[95%] lg:h-[85px] border-3 text-lg flex justify-start items-center mx-auto lg:text-xl font-bold rounded-3xl mb-5 bg-backgroundColor ${
        isFirst
          ? "border-classyBlue shadow-[5px_5px_10px_2px_#CF28B066] text-classyBlue"
          : "border-outlineGrey"
      }`}
    >
      <p className="px-5 py-4">{title}</p>
    </div>
  );
}

export default FeatureCard;
