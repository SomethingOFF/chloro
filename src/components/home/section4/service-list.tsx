"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

import ImageModel from "@/components/model/image-model";
import { Button } from "@/components/ui/Button";
import servicelist from "@/data/servicelist.json";

const ServiceList = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const handleResize = () => setIsSmallScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    handleResize();

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + 3);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 lg:gap-4">
        {(isSmallScreen ? servicelist.slice(0, visibleItems) : servicelist).map(
          ({ imageUrl, name, description, id }) => (
            <div
              className="w-full h-full p-4 group flex flex-col items-center cursor-pointer"
              key={id}
            >
              <div>
                <ImageModel
                  src={imageUrl}
                  className="group-hover:scale-125 transition-all"
                />
              </div>
              <div className="bg-primary-foreground shadow-xl max-w-[80%] rounded-lg relative p-4 -top-10 space-y-2 flex flex-col items-center text-center">
                <div className="text-lg font-medium">{name}</div>
                <div className="text-sm">{description}</div>
                <Button className="gap-2" variant={"outline"}>
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          )
        )}
      </div>
      {isSmallScreen && visibleItems < servicelist.length && (
        <Button className="my-4" onClick={handleLoadMore}>
          Load More
        </Button>
      )}
    </div>
  );
};

export default ServiceList;
