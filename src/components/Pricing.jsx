import React from "react";
import PlanCard from "./PlanCard";

const plans = [
  {
    title: "FREE",
    price: "0",
    features: [
      "5 documents a month",
      "Activity timeline",
      "No Credit Card required",
    ],
    isFree: true,
  },
  {
    title: "Premium",
    price: "10",
    features: [
      "Unlimited documents",
      "Unlimited signees",
      "Activity timeline",
      "Certificate of completion",
    ],
  },
  {
    title: "Teams",
    price: "8",
    features: [
      "Everything from Premium",
      "Team management",
      "Transferable contracts",
    ],
  },
];

function Pricing() {
  return (
    <div className="w-[1191px] h-[738px]  m-auto mt-10">
      <div className="text-center font-bold text-3xl">
        <p>Pick your plan. We make this part easy too.</p>
      </div>
      <div className="w-[300px] h-[60px] flex bg-white rounded-4xl m-auto mt-8.5 border-1 border-black">
        <div className="w-1/2 h-full bg-classyBlue text-white font-primary flex justify-center items-center rounded-4xl">
          Monthly
        </div>
        <div className="w-1/2 h-full bg-white font-primary flex items-center justify-center rounded-4xl">
          Yearly
        </div>
      </div>
      <div className="flex justify-between mt-16">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
}

export default Pricing;
