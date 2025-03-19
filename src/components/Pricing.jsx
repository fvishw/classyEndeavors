import React, { useState } from "react";
import PlanCard from "./PlanCard";

const plans = [
  {
    title: "FREE",
    monthlyPrice: 0,
    features: [
      "5 documents a month",
      "Activity timeline",
      "No Credit Card required",
    ],
    isFree: true,
  },
  {
    title: "Premium",
    monthlyPrice: 10,
    features: [
      "Unlimited documents",
      "Unlimited signees",
      "Activity timeline",
      "Certificate of completion",
    ],
  },
  {
    title: "Teams",
    monthlyPrice: 8,
    features: [
      "Everything from Premium",
      "Team management",
      "Transferable contracts",
    ],
  },
];

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const discountedPlans = plans.map((plan) => ({
    ...plan,
    price: isYearly
      ? (plan.monthlyPrice * 12 * 0.9).toFixed(1)
      : plan.monthlyPrice,
  }));

  return (
    <div
      className="lg:w-[1191px] lg:h-[738px]  m-auto mt-7 lg:mt-10"
      id="pricing"
    >
      <div className="text-center font-bold text-xl lg:text-3xl">
        <p className="block lg:hidden">Pick your plan</p>
        <p className="hidden lg:block">
          Pick your plan. We make this part easy too.
        </p>
      </div>

      <div className="lg:w-[300px] w-3xs h-13 lg:h-[60px] flex bg-white rounded-4xl m-auto mt-8.5 border-1 border-black">
        <button
          className={`w-1/2 h-full bg-classyBlue font-primary flex justify-center items-center rounded-4xl hover:cursor-pointer ${
            !isYearly ? "bg-classyBlue text-white" : "bg-white text-black"
          }`}
          onClick={() => setIsYearly(false)}
        >
          Monthly
        </button>
        <button
          className={`w-1/2 h-full font-primary flex items-center justify-center rounded-4xl hover:cursor-pointer ${
            isYearly ? "bg-classyBlue text-white" : "bg-white text-black"
          }`}
          onClick={() => setIsYearly(true)}
        >
          Yearly
        </button>
      </div>
      <div className="flex  flex-col gap-y-5 lg:flex-row justify-between mt-9 lg:mt-16">
        {discountedPlans.map((plan, index) => (
          <PlanCard key={index} {...plan} isYearly={isYearly} />
        ))}
      </div>
    </div>
  );
}

export default Pricing;
