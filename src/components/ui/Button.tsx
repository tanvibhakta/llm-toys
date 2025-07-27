import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: [
          "text-black",
          "bg-slate-50",
          "hover:bg-slate-300",
          "active:bg-slate-300",
          "disabled:bg-slate-300",
          "disabled:opacity-50",
        ],
        // accent button
        secondary: [
          "text-white",
          "bg-sky-500",
          "hover:bg-sky-700",
          "active:bg-sky-700",
          "disabled:bg-sky-700",
          "disabled:opacity-50",
        ],
      },
      size: {
        small: "h-8 px-4 text-sm",
        medium: "h-9 px-6 text-base",
        large: "h-13 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const ButtonComponent = asChild ? Slot : "button";
    return (
      <ButtonComponent
        className={clsx(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
