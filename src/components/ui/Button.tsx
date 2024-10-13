import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "flex items-center justify-center rounded-md transition-all shrink-0 rounded-md text-sm font-medium w-fit",
  {
    variants: {
      variant: {
        default: "bg-primary-background text-primary-foreground",
        secondary:
          "bg-secondary-background text-secondary-foreground border hover:border-secondary-background hover:bg-transparent hover:text-primary-foreground",
        ghost: "hover:bg-secondary-background hover:text-secondary-foreground",
        outline: "underline underline-offset-4",
      },
      size: {
        default: "min-h-10 px-4 py-2",
        icon: "h-8 w-8 md:h-10 md:w-10 lg:h-11 lg:w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
