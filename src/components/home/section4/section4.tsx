import React from "react";
import ServiceList from "./service-list";

const Section4 = () => {
  return (
    <div className="mx-auto max-w-[1440px] h-auto px-4">
      <div className="flex items-center flex-col justify-center h-full space-y-4">
        <div className="flex flex-col items-center justify-center text-center max-w-lg p-10 lg:p-0 space-y-4 shrink-0">
          <div className="text-4xl sm:text-5xl lg:text-6xl lg:leading-loose">
            Our Services
          </div>
          <div className="text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
          </div>
        </div>
        <ServiceList />
      </div>
    </div>
  );
};

export default Section4;
