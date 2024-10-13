"use client";
import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const ImageModel = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full rouned-sm sm:rounded-tl-full sm:rounded-tr-full overflow-hidden">
        {isLoading && (
          <div className="spinner absolute w-full h-full bg-tertiary-background flex items-center justify-center rounded-tl-full rounded-tr-full ">
            <LoaderCircle className="animate-spin" />
          </div>
        )}
        <Image
          src={src}
          alt="image"
          width={100}
          height={100}
          unoptimized
          onLoad={handleImageLoad}
          className={cn("w-full h-full object-cover", className)}
        />
      </div>
    </div>
  );
};

export default ImageModel;
