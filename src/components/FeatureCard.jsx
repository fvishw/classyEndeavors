import React from "react";

function FeatureCard({ title, isFirst }) {
  return (
    <div
      className={`w-[427px] h-[85px] border-3 text-xl font-bold rounded-3xl mb-5  ${
        isFirst
          ? "border-classyBlue shadow-[5px_5px_10px_rgba(229,170,222,1)] text-classyBlue"
          : "border-outlineGrey"
      }`}
    >
      <p className="ml-10 mt-5">{title}</p>
    </div>
  );
}

export default FeatureCard;
