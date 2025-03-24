import React from 'react';
import { twMerge } from 'tailwind-merge';

type Level = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  level: Level;
  className?: string;
  children: React.ReactNode;
  underline?: boolean;
}

export const Heading = ({ level, children, className, underline = false }: HeadingProps) => {
  // Dynamically determine the heading tag (h1, h2, etc.)
  const Component = level;
  const classes = {
    h1: `text-4xl md:text-5xl text-blue-900 font-bold`,
    h2: `text-3xl md:text-4xl text-blue-900 font-bold`,
    h3: `text-2xl md:text-3xl text-blue-900 font-bold`,
    h4: `text-xl md:text-2xl text-blue-900 font-bold`,
    h5: `text-lg md:text-xl text-blue-900 font-bold`,
    h6: `text-lg text-blue-900 font-bold`
  }[level];
  const underlineClasses = "after:content-[''] after:mt-2 after:bg-yellow-500 after:w-1/3 after:h-3 after:block";

  return <Component className={twMerge(classes, underline && underlineClasses, className)}>{children}</Component>;
};

export default Heading;
