import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
  isLight?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", isLight = false, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-semibold transition-all ease-in-out duration-300 border-2 rounded-sm cursor-pointer",
          // Variants
          {
            "bg-secondary text-white border-transparent hover:bg-[#0056b3] hover:-translate-y-0.5 shadow-md shadow-secondary/30 hover:shadow-lg hover:shadow-secondary/25":
              variant === "primary" && !isLight,
            "bg-bg-light text-primary border-[#E2E8F0] hover:bg-[#E2E8F0] hover:-translate-y-0.5":
              variant === "secondary" && !isLight,
            "bg-transparent text-secondary border-secondary hover:bg-secondary hover:text-white":
              variant === "outline" && !isLight,
            "bg-transparent text-main hover:text-secondary border-transparent":
              variant === "ghost" && !isLight,

            // Light variants
            "bg-white text-primary border-transparent hover:bg-gray-100":
              variant === "primary" && isLight,
            "bg-transparent text-white border-white hover:bg-white hover:text-primary":
              variant === "outline" && isLight,
            "bg-white/10 text-white border-transparent hover:bg-white/20":
              variant === "secondary" && isLight,
          },
          // Sizes
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-7 py-[0.875rem] text-base": size === "default",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
