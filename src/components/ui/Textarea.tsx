import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string | boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-md border border-[#E2E8F0] bg-white px-3 py-2 text-sm text-main placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-colors resize-y",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
