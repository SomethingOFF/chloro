import CarasoulModel from "@/components/model/carasoul-model";
import ImageModel from "@/components/model/image-model";
import { cn } from "@/lib/utils";
import React from "react";

const Section1Carasoul = () => {
  //fetched data
  const data = [
    {
      id: 0,
      imageUrl:
        "https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/woman-in-towel-applying-body-cream-with-hands-loti-XNNXLFD.jpg",
    },
    {
      id: 1,
      imageUrl:
        "https://askproject.net/chloro/wp-content/uploads/sites/23/2021/12/anthony-tran-Sd9A6NVHsd4-unsplash3.jpeg",
    },
    {
      id: 2,
      imageUrl:
        "https://askproject.net/chloro/wp-content/uploads/sites/23/2021/12/kalos-skincare-jyKa0Ynxvow-unsplash.jpeg",
    },
  ];
  return (
    <CarasoulModel move={2} length={data.length}>
      {data.map(({ imageUrl, id }) => (
        <div
          className={cn(
            "p-4 w-full sm:w-1/2 lg:w-1/2 h-full flex items-center justify-center shrink-0"
          )}
          key={id}
        >
          <div className="w-full h-full">
            <ImageModel src={imageUrl} />
          </div>
        </div>
      ))}
    </CarasoulModel>
  );
};

export default Section1Carasoul;
