import React from "react";
import { ArrowRight } from "lucide-react";

import { Highlighter2 } from "@/components/highlighter";
import { Button } from "@/components/ui/Button";

import Section3Carasoul from "./section3-carasoul";

const Section3 = () => {
  return (
    <div className="mx-auto max-w-[1440px] h-[100vh] px-4">
      <div className="flex items-center flex-col lg:flex-row  justify-center h-full">
        <div className="flex flex-col items-center justify-center text-center max-w-lg p-10 lg:p-0 space-y-6 shrink-0">
          <div className="text-4xl sm:text-5xl lg:text-6xl lg:leading-loose">
            Our
            <span className="relative">
              <Highlighter2 className="scale-110" /> Product.
            </span>
          </div>
          <div className="text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
          </div>
          <Button
            variant={"secondary"}
            className="gap-4 rounded-full h-12 px-6"
          >
            <span>Shop Now </span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
        <Section3Carasoul />
      </div>
    </div>
  );
};

export default Section3;
