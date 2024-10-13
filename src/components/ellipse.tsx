import { cn } from "@/lib/utils";
import React from "react";

const Ellipse = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn("absolute left-0 top-0 scale-110 w-full h-full", className)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 269 239" fill="none">
        <path
          d="M30.3668 238.363C-18.8996 172.451 -5.4017 79.1724 60.5223 29.9061C126.446 -19.3601 219.734 -5.87181 269.001 60.0402L30.3668 238.363Z"
          fill="#023A15"
        />
      </svg>
    </div>
  );
};

export default Ellipse;
