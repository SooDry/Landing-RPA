import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold tracking-wider uppercase",
        {
          "bg-secondary/10 text-secondary": variant === "default",
          "bg-success/10 text-success": variant === "success",
          "bg-warning/10 text-warning": variant === "warning",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
