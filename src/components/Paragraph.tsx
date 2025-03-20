import { HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
  className?: string;
};

export const Paragraph = ({ children, className, ...props }: ParagraphProps) => {
  return (
    <p className={twMerge('mb-4 leading-[1.8] text-lg', className)} {...props}>
      {children}
    </p>
  );
};
