import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: [
          'text-text-black',
          'bg-button-primary-bg',
          'hover:bg-button-primary-hover',
          'active:bg-button-primary-hover',
          'disabled:bg-button-primary-hover',
          'disabled:opacity-50',
        ],
        // accent button
        secondary: [
          'text-white',
          'bg-button-secondary-bg',
          'hover:bg-button-secondary-hover',
          'active:bg-button-secondary-hover',
          'disabled:bg-button-secondary-hover',
          'disabled:opacity-50',
        ],
      },
      size: {
        small: 'h-8 px-4 text-sm', // height 32px, font size 14px
        medium: 'h-9 px-6 text-[15px]', // height 36px, font size 15px
        large: 'h-13 px-8 text-[17px]', // height 52px, font size 17px
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const ButtonComponent = asChild ? Slot : 'button';
    return (
      <ButtonComponent
        className={clsx(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
