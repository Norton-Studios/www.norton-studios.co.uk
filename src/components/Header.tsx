'use client';
import { MouseEvent, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { CustomLink } from '@/components/CustomLink';
import { ButtonVariant } from './Button';
import { twMerge } from 'tailwind-merge';

export const Header = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const mobileLinkClasses = 'py-4 px-2 no-underline border-b-[1px] border-b-white focus:text-blue-900 focus:bg-white';

  const handleNavigation = (event: MouseEvent<HTMLElement>) => {
    console.log('hhhmmm');
    event.preventDefault();
    setIsNavigationOpen(!isNavigationOpen);
  };

  const menuItems = [
    {
      label: 'How we work',
      url: '/how-we-work'
    },
    {
      label: 'Case studies',
      url: '/case-studies'
    },
    {
      label: 'About us',
      url: '/about-us'
    }
  ];

  return (
    <header className="py-4 md:py-8">
      <a href="#main" className="sr-only">
        Skip to content
      </a>
      {isNavigationOpen && <div onClick={(e) => handleNavigation(e)} className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-blue-900 opacity-50 lg:hidden" />}
      <Container className="flex justify-between align-middle items-center relative z-10">
        <Link href="/">
          <Image className="w-[137px] h-[80px] md:w-[202px] md:h-[118px]" src="/logo-new.svg" alt="Norton Studios Logo" width={604} height={307} priority />
        </Link>
        <div>
          <details open={isNavigationOpen} className="lg:hidden">
            <summary
              onClick={(e) => handleNavigation(e)}
              className="list-none text-xl cursor-pointer border-2 border-white focus-visible:border-yellow-500 focus-visible:border-2 focus-visible:outline-none p-2"
            >
              <Image className={twMerge(isNavigationOpen && 'hidden')} src="/menu.svg" alt={''} width="24" height="24" />
              <Image className={twMerge(!isNavigationOpen && 'hidden')} src="/menu-close.svg" alt={''} width="24" height="24" />
              <span className="sr-only">{`${isNavigationOpen ? 'Close' : 'Open'} menu`}</span>
            </summary>
            <div className="absolute z-10 px-8 py-4 pb-8 left-0 right-0 top-[95px] lg:top-[130px] w-auto bg-tan-500">
              <nav className="flex flex-col mb-4">
                {menuItems.map((item) => {
                  return (
                    <CustomLink key={item.url} variant="blue" href={item.url} className={mobileLinkClasses}>
                      {item.label}
                    </CustomLink>
                  );
                })}
              </nav>
              <CustomLink href="/contact-us" asButtonVariant={ButtonVariant.SECONDARY}>
                Talk to us!
              </CustomLink>
            </div>
          </details>
        </div>

        <div className="hidden lg:flex max-md:mt-6 max-md:py-6 max-md:border-t-2 max-md:border-t-slate-200 items-center">
          <nav>
            {menuItems.map((item) => {
              return (
                <CustomLink
                  key={item.url}
                  href={item.url}
                  className="text-lg relative font-bold p-4 mx-2 no-underline hover:after:content-[''] hover:after:h-1 hover:after:w-full hover:after:block hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:bg-yellow-500 hover:after:mt-2 after:transition-all after:duration-300 after:ease-in-out focus:text-blue-900 focus:no-underline focus:after:content-[''] focus:after:h-1 focus:after:w-full focus:after:block focus:after:absolute focus:after:bottom-0 focus:after:left-0 focus:after:bg-yellow-500 focus:after:mt-2"
                >
                  {item.label}
                </CustomLink>
              );
            })}
          </nav>
          <CustomLink href="/contact-us" asButtonVariant={ButtonVariant.SECONDARY}>
            Talk to us!
          </CustomLink>
        </div>
      </Container>
    </header>
  );
};
