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
  {
    isFirst: false,
    title: "End-to-end encryption",
  },
];

function Features() {
  return (
    <div className="mt-9">
      <p className="font-bold  text-2xl lg:text-3xl text-center">
        Why Choose Docutech
      </p>
      <div className="mt-10 lg:w-[1200px]  m-auto flex flex-col lg:flex-row justify-between ">
        <div className="">
          {features.map((feature, index) => (
            <FeatureCard
              title={feature.title}
              isFirst={feature.isFirst}
              key={index}
            />
          ))}
        </div>
        <div className="lg:w-[737px] w-[95%] h-96 mx-auto lg:h-[715px] border-1 border-black rounded-3xl bg-white z-1"></div>
      </div>
    </div>
  );
}

export default Features;
