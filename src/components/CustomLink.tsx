import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type CustomLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
  Pick<LinkProps, 'href'> & {
    variant?: 'blue' | 'yellow';
    className?: string;
  };

const classes = {
  blue: ['text-blue-900', 'focus:text-blue-500'],
  yellow: ['text-yellow-500', 'focus:text-white']
};

const commonClasses = 'hover:underline focus:outline-none focus:underline';

export const CustomLink = ({ children, href, target, variant = 'blue', className, ...props }: CustomLinkProps) => {
  return (
    <Link href={href} target={target} className={twMerge(commonClasses, ...classes[variant], className)} {...props}>
      {children}
    </Link>
  );
};
