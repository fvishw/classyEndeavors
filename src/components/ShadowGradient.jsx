import React from "react";

export const ShadowGradient = (props) => {
  return (
    <div
      className={`
        w-[879px] 
        h-[877px] 
        absolute
        bg-classyBlue
        rounded-full
        blur-[600px] 
        opacity-50
        -z-10
        ${props.style}
      `}
    ></div>
  );
};

export default ShadowGradient;
