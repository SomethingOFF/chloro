"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface CarouselModelProps {
  length: number;
  children: React.ReactNode;
  move?: number; 
}

const CarouselModel: React.FC<CarouselModelProps> = ({
  length ,
  children,
  move = 1,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responsiveMove, setResponsiveMove] = useState(move);
  const dataLength = length

  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  useEffect(() => {
    const updateResponsiveMove = () => {
      if (window.innerWidth < 640) {
        setResponsiveMove(1);
      } else if (window.innerWidth < 1024) {
        setResponsiveMove(move > 2 ? 2 : move);
      } else {
        setResponsiveMove(move);
      }
    };

    updateResponsiveMove();
    window.addEventListener("resize", updateResponsiveMove);

    return () => window.removeEventListener("resize", updateResponsiveMove);
  }, [move]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dataLength);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [dataLength]);

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const delta = touchStartX - touchEndX;
    if (delta > 50) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dataLength);
    } else if (delta < -50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? dataLength - 1 : prevIndex - 1
      );
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div className="w-full h-full max-h-[60vh]">
      <div
        className="relative w-full h-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full h-[calc(100%-40px)] overflow-hidden transition-all">
          <div
            className="absolute flex items-center w-full h-full transition-transform ease-in-out duration-200"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / responsiveMove)
              }%)`,
            }}
          >
            {children}
          </div>
        </div>
        <div className="flex items-center justify-center h-10 space-x-2 transition-all">
          { Array(length).fill(null).map((_, index) => {
            const isActive = currentIndex === index;
            const isAdjacent =
              currentIndex + 1 === index || currentIndex - 1 === index;

            return (
              <div
                key={index}
                className={cn(
                  "rounded-full cursor-pointer transition-all bg-secondary-background",
                  isActive ? "w-4 h-4" : "w-2 h-2 hover:w-4 hover:h-4",
                  isAdjacent ? "w-3 h-3" : !isActive && "w-1.5 h-1.5"
                )}
                onClick={() => handleIndicatorClick(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CarouselModel;
