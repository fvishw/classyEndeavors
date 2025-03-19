import React from "react";
import FAQcard from "./FAQcard";

const faqs = [
  {
    que: "Are DocuTech signatures legally binding?",
    ans: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",
  },
  {
    que: "Are DocuTech signatures legally binding?",
    ans: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",
  },
  {
    que: "Are DocuTech signatures legally binding?",
    ans: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",
  },
  {
    que: "Are DocuTech signatures legally binding?",
    ans: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",
  },
];

function FAQ() {
  return (
    <div className="mt-9 lg:mt-12">
      <div>
        <h2 className="font-primary font-bold text-2xl lg:text-3xl text-center">
          FAQs
        </h2>
      </div>
      <div>
        {faqs.map((faq, index) => (
          <FAQcard key={index} {...faq} />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
