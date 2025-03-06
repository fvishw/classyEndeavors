import React from "react";

function FeatureCard({ title, isFirst }) {
  return (
    <div
      className={`w-[427px] h-[85px] border-3 text-xl font-bold rounded-3xl mb-5 bg-backgroundColor ${
        isFirst
          ? "border-classyBlue shadow-[5px_5px_10px_2px_#CF28B066] text-classyBlue"
          : "border-outlineGrey"
      }`}
    >
      <p className="ml-10 mt-5">{title}</p>
    </div>
  );
}

export default FeatureCard;
