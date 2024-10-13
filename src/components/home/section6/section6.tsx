import ImageModel from "@/components/model/image-model";
import React from "react";
import Section6Carasoul from "./section6-carasoul";
import { Highlighter2 } from "@/components/highlighter";

const Section6 = () => {
  return (
    <div className="mx-auto max-w-[1440px] h-[100vh] p-8">
      <div className="flex flex-col h-full items-center justify-center">
        <div className="text-2xl sm:text-4xl lg:text-5xl h-20 lg:h-40 flex items-center justify-center">
          Good Review From
          <span className="relative">
            <Highlighter2 className="-bottom-10" />
            Our Customer
          </span>
        </div>
        <div className="flex flex-col-reverse lg:flex-row h-full w-full items-center justify-center gap-4">
          <div className="w-1/2 h-1/2">
            <Section6Carasoul />
          </div>
          <div className="max-w-lg h-1/2">
            <ImageModel src="https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/lifting-anti-wrinkle-collagen-patches-under-eyes-RB522JG.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
