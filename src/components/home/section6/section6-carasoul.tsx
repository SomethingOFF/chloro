import React from "react";
import CarasoulModel from "@/components/model/carasoul-model";
import data from "@/data/reviews.json";
import { cn } from "@/lib/utils";

const Section6Carasoul = () => {
  return (
    <CarasoulModel move={1} length={data.length}>
      {data.map(({ name, id, content }) => (
        <div
          className={cn(
            "p-4 w-full h-full flex flex-col gap-4 items-center justify-center shrink-0"
          )}
          key={id}
        >
          <div className="text-sm lg:text-base">{content}</div>
          <div className="text-lg lg:text-xl font-medium">{name}</div>
        </div>
      ))}
    </CarasoulModel>
  );
};

export default Section6Carasoul;
