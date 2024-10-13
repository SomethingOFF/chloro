import ImageModel from "@/components/model/image-model";
import { Button } from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import React from "react";

const Section5 = () => {
  return (
    <div className="mx-auto max-w-[1440px] h-[100vh] p-4">
      <div className="flex flex-col md:flex-row items-center justify-center w-full h-full">
        <div className="w-full md:w-1/2 h-2/3">
          <ImageModel src="https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/woman-taking-a-bath-massage-soap-treat-yourself-sp-ZZG446W-2.jpg" />
        </div>
        <div className="w-full md:w-1/2 h-2/3 flex flex-row md:flex-col">
          <div className="bg-primary-background text-primary-foreground p-8 md:p-14 space-y-4 relative md:-left-10 rounded-md">
            <div className="text-2xl lg:text-4xl">Our story</div>
            <div className="text-sm lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              accumsan arcu est, at lobortis nulla porta eu. Aenean vel dolor
              enim. Etiam aliquam mauris eros.
            </div>
            <Button
              className="gap-2 rounded-full pr-4 w-auto"
              variant={"secondary"}
            >
              <ChevronRight />
              <div>Read More</div>
            </Button>
          </div>
          <div className="p-4 md:p-8 space-y-4 my-10">
            <div className="flex items-center flex-col  space-y-2">
              <div className="text-xl md:text-4xl font-medium">955+</div>
              <div className="text-sm">Happy customer</div>
            </div>
            <div className="flex items-center flex-col  space-y-2">
              <div className="text-xl md:text-4xl font-medium">240+</div>
              <div>Positive Review</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
