import React from "react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    isFirst: true,
    title: "Trusted by Thousands",
  },
  {
    isFirst: false,
    title: "SOC-2 Certified ",
  },
  {
    isFirst: false,
    title: "Trusted by Thousands",
  },
];

function Features() {
  return (
    <div className="mt-9">
      <p className="font-bold text-3xl text-center">Why Choose Docutech</p>
      <div className="mt-10 w-[1200px] m-auto flex justify-between ">
        <div className="">
          {features.map((feature, index) => (
            <FeatureCard
              title={feature.title}
              isFirst={feature.isFirst}
              key={index}
            />
          ))}
        </div>
        <div className="w-[737px] h-[715px] border-1 border-black rounded-3xl "></div>
      </div>
    </div>
  );
}

export default Features;
