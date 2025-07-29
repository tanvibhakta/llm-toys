import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const iconButtonVariants = cva(
  "inline-flex items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        ghost: [
          "text-slate-500",
          "hover:text-slate-200",
          "hover:bg-slate-700/40",
          "active:bg-slate-600/40",
        ],
      },
      size: {
        small: "h-8 min-w-8 [&>svg]:h-4 [&>svg]:w-4",
        medium: "h-9 min-w-9 [&>svg]:h-5 [&>svg]:w-5",
        large: "h-12 min-w-12 [&>svg]:h-6 [&>svg]:w-6",
      },
    },
    defaultVariants: {
      variant: "ghost",
      size: "medium",
    },
  },
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
  children: React.ReactNode;
}

const IconButton = ({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: IconButtonProps) => {
  return (
    <button
      className={clsx(iconButtonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
};

IconButton.displayName = "IconButton";

export { IconButton, iconButtonVariants };
