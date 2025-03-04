import React from "react";
import userImg from "../assets/testimonials/userImg.png";
function TestimonialCard({ review, stars }) {
  return (
    <div className="w-[350px] h-60 mb-3 rounded-2xl bg-backgroundColor p-4 shadow-[2px_3px_5px_rgba(1,1,1,1)] m-auto">
      <div className="ml-4 mt-3">
        <img className="rounded-4xl" src={userImg} alt="" />
        <p>{review}</p>
        <p className="text-xl">{"⭐".repeat(stars)}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
