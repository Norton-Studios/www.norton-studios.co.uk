import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { classes as buttonClasses, ButtonVariant } from '@/components/Button';

type CustomLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
  Pick<LinkProps, 'href'> & {
    variant?: 'blue' | 'yellow';
    className?: string;
    asButtonVariant?: ButtonVariant;
  };

const classes = {
  blue: ['text-blue-900', 'focus:text-blue-500'],
  yellow: ['text-yellow-500', 'focus:text-white']
};

const commonClasses = 'hover:underline focus:outline-none focus:underline';

export const CustomLink = ({ children, href, target, variant = 'blue', asButtonVariant, className, ...props }: CustomLinkProps) => {
  return (
    <Link
      href={href}
      target={target}
      className={twMerge(asButtonVariant ? [...buttonClasses[asButtonVariant]] : [commonClasses, ...classes[variant]], className)}
      {...props}
    >
      {children}
      {target === '_blank' && <span className="sr-only"> (opens in a new tab)</span>}
    </Link>
  );
};
