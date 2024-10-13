import React from "react";
import { ChevronRight } from "lucide-react";

import { cormorant } from "@/app/layout";
import AppHeader from "@/components/header/app-header";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

import Section1Carasoul from "./section1-carasoul";
import Highlighter, { Highlighter2 } from "@/components/highlighter";

const Section1 = () => {
  return (
    <div className="mx-auto max-w-[1440px] h-[100vh]">
      <AppHeader />
      <div className="h-[calc(100vh-80px)] flex items-center justify-center flex-col-reverse lg:flex-row">
        <div className="flex h-full flex-col w-full max-w-2xl gap-8 p-8 lg:items-start lg:justify-center lg:w-1/2">
          <div className="text-4xl sm:text-5xl lg:text-6xl space-y-5">
            <div>
              <span
                className={cn(
                  cormorant.className,
                  "font-thin  lg:text-7xl leading-loose"
                )}
              >
                A whole
              </span>{" "}
              <span className="relative">
                <Highlighter />
                new world,
              </span>
            </div>{" "}
            <div>
              <span
                className={cn(cormorant.className, "font-thin  lg:text-7xl")}
              >
                a whole
              </span>{" "}
              <span className="relative">
                <Highlighter2 />
                new look
              </span>
            </div>
          </div>
          <div className="text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum.
          </div>
          <Button
            variant={"secondary"}
            className="gap-4 rounded-full h-12 px-6"
          >
            <ChevronRight className="w-5 h-5" />
            <span>DISCOVER MORE</span>
          </Button>
        </div>
        <div className="lg:w-1/2 w-full h-full flex items-center justify-center">
          <Section1Carasoul />
        </div>
      </div>
    </div>
  );
};

export default Section1;
