import { cn } from "@/lib/utils";
import React from "react";

const Highlighter = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn("absolute left-0 top-0 w-full h-full scale-110", className)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 466 116" fill="none">
        <path
          d="M4.57924 45.6273C4.57924 45.6273 157.688 -11.6006 343.083 10.1527C528.478 31.906 424.63 104.529 271.022 111.891C117.414 119.254 -68.9795 82.7752 29.5426 48.974C128.065 15.1727 307.968 -16.2859 432.285 25.7147C556.603 67.7153 302.143 124.274 79.8023 106.369C-142.538 88.4646 163.513 4.29607 287.165 1.11675C410.817 -2.06258 518.991 60.52 409.153 87.9626C299.314 115.405 53.0082 137.326 29.8755 73.4046C6.74273 9.4834 378.864 -2.56458 439.441 18.1847"
          stroke="#319E48"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const Highlighter2 = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute left-0 w-full h-full scale-110", className)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 377 20" fill="none">
        <path
          d="M1 8.65318C3 7.12255 205.143 14.7757 350 15.541C494.429 16.3064 -44.7143 22.4289 11.8571 16.3064C83.1429 8.65318 348.571 11.7145 376 1"
          stroke="#319E48"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
export default Highlighter;
