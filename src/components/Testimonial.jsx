// Carousel for user feedback with rating stars.
import React from "react";
import TestimonialCard from "./TestimonialCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import leftIcon from "../assets/testimonials/left.png";
import rightIcon from "../assets/testimonials/right.png";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="w-15 h-15 absolute top-1/2 right-0 transform -translate-y-1/2 bg-classyBlue text-white p-2 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      <img className="m-auto my-3" src={rightIcon} alt="" />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="w-15 h-15 absolute top-1/2 left-0 transform -translate-y-1/2 bg-classyBlue text-white rounded-full cursor-pointer z-10 "
      onClick={onClick}
    >
      <img className="m-auto my-4" src={leftIcon} alt="" />
    </div>
  );
};

const userReviews = [
  {
    review:
      "Create contracts, agreements & forms in seconds using advanced AI technology",
    stars: 5,
  },
  {
    review:
      "Create contracts, agreements & forms in seconds using advanced AI technology",
    stars: 5,
  },
  {
    review:
      "Create contracts, agreements & forms in seconds using advanced AI technology",
    stars: 5,
  },
  {
    review:
      "Create contracts, agreements & forms in seconds using advanced AI technology",
    stars: 5,
  },
  {
    review:
      "Create contracts, agreements & forms in seconds using advanced AI technology",
    stars: 5,
  },
  {
    review:
      "Create contracts, agreements & forms in seconds using advanced AI technology",
    stars: 5,
  },
];

function Testimonials() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="w-[1230px] h-80 mt-10 m-auto">
      <div>
        <p className="font-bold text-3xl text-center mb-10">
          What our users say{" "}
        </p>
      </div>

      <div className="">
        <Slider {...settings}>
          {userReviews.map((user, index) => (
            <TestimonialCard key={index} {...user} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
