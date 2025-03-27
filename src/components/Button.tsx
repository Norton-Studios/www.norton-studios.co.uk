import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  testId?: string;
  variant?: ButtonVariant;
};

export const commonClasses = [
  'outline-none',
  'inline-block',
  'font-bold',
  'p-2 pb-1',
  'text-[16px]',
  'transition-all',
  'duration-400',
  'md:px-4 md:py-3 md:pb-2',
  'border-b-4',
  'focus:outline-2',
  'focus:outline-offset-0'
];

export const classes = {
  primary: ['bg-blue-900', 'text-white', 'border-b-blue-900', 'hover:border-b-yellow-500', 'focus:outline-yellow-500'].concat(commonClasses),
  secondary: ['bg-yellow-500', 'text-blue-900', 'border-b-yellow-500', 'hover:border-b-blue-900', 'focus:outline-blue-900'].concat(commonClasses)
};

export const Button = ({ className, children, testId = 'button', type: typeProp, variant = ButtonVariant.PRIMARY, ...props }: ButtonProps) => {
  const type = typeof typeProp === 'undefined' ? 'submit' : typeProp;

  return (
    <button data-testid={testId} className={twMerge(classes[variant], className)} type={type} {...props}>
      {children}
    </button>
  );
};
