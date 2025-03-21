import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type CaseStudyProps = {
  children: ReactNode;
};

export const CaseStudy = ({ children }: CaseStudyProps) => {
  const headingClasses = [
    `[&_h1]:font-bold`,
    `[&_h1]:text-blue-900`,
    `[&_h1]:text-4xl`,
    `[&_h1]:md:text-5xl`,
    `[&_h1]:mb-8`,
    `[&_h2]:font-bold`,
    `[&_h2]:text-blue-900`,
    `[&_h2]:text-3xl`,
    `[&_h2]:md:text-4xl`,
    `[&_h2]:mb-8`,
    `[&_h3]:font-bold`,
    `[&_h3]:text-blue-900`,
    `[&_h3]:mb-4`,
    `[&_h3]:text-2xl`,
    `[&_h3]:md:text-3xl`,
    `[&_h4]:font-bold`,
    `[&_h4]:text-blue-900`,
    `[&_h4]:mb-6`,
    `[&_h4]:text-xl`,
    `[&_h4]:md:text-2xl`,
    `[&_h5]:font-bold`,
    `[&_h5]:text-blue-900`,
    `[&_h5]:mb-6`,
    `[&_h5]:text-lg`,
    `[&_h5]:md:text-xl`,
    `[&_h6]:font-bold`,
    `[&_h6]:text-blue-900`,
    `[&_h6]:text-lg`
  ];

  const paragraphClasses = [`[&_p]:mb-4`, `[&_p]:md:mb-6`, '[&_p]:text-lg'];

  const listClasses = [
    `[&_ul]:mb-4`,
    `[&_ul]:p-4`,
    `[&_ul]:md:mb-8`,
    '[&_ul]:text-lg',
    '[&_ul>li]:ml-8',
    '[&_ul>li]:pl-2',
    '[&_ul>li]:mb-2',
    '[&_ul>li]:list-disc',
    '[&_ul]:bg-tan-500',
    `[&_ol]:mb-4`,
    `[&_ol]:md:mb-8`,
    '[&_ol]:text-lg',
    '[&_ol>li]:ml-8',
    '[&_ol>li]:pl-2',
    '[&_ol>li]:mb-2',
    '[&_ol>li]:list-decimal'
  ];

  return <div className={twMerge([headingClasses, paragraphClasses, listClasses])}>{children}</div>;
};
