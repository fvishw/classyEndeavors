import React from "react";
import userImg from "../assets/testimonials/userImg.png";
function TestimonialCard({ review, stars }) {
  return (
    <div className="w-[350px] h-60 mb-5 rounded-2xl bg-backgroundColor p-5 shadow-[0px_7px_8px_0px_#00000040] m-auto z-1">
      <div className="mx-3 mt-3 ">
        <img
          className="rounded-4xl shadow-[0px_4px_8px_rgba(0,0,0,0.25)]"
          src={userImg}
          alt=""
        />
        <p className="font-primary  mt-4 p-2 text-center">{review}</p>
        <p className="text-xl text-center mt-2">{"⭐".repeat(stars)}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
