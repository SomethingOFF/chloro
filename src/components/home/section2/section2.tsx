import Highlighter from "@/components/highlighter";
import ImageModel from "@/components/model/image-model";
import React from "react";

const Section2 = () => {
  return (
    <div className="mx-auto max-w-[1440px] h-[100vh] px-4">
      <div className="flex items-center justify-center flex-col relative h-full">
        <div className="flex flex-col items-center justify-center text-center max-w-lg p-10 lg:p-0 lg:absolute space-y-4">
          <div className="text-base font-medium">Alive every moment</div>
          <div className="text-4xl sm:text-5xl lg:text-6xl lg:leading-loose">
            Beauty is all about{" "}
            <span className="relative">
              <Highlighter className="top-5 scale-125" />
              you.
            </span>
          </div>
          <div className="text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            lobortis sed sapien in pretium. Donec tincidunt, quam.
          </div>
        </div>
        <div className="flex items-center justify-center lg:justify-between gap-2 w-full">
          <div className="lg:w-1/4 h-full max-h-[300px] flex items-center justify-center">
            <ImageModel src="https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/composition-of-a-brown-glass-dropper-bottle-with-a-NWSPPKG.jpg" />
          </div>
          <div className="lg:w-1/4 h-full max-h-[300px] flex items-center justify-center">
            <ImageModel src="https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/lifting-anti-wrinkle-collagen-patches-under-eyes-RB522JG.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
