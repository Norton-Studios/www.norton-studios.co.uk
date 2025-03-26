import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { CustomLink } from '@/components/CustomLink';
import { ButtonVariant } from './Button';

export const Header = () => {
  const mobileLinkClasses = 'px-2 py-4';

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
      label: 'About Us',
      url: '/about-us'
    }
  ];

  return (
    <header className="py-4 md:py-8">
      <Container className="flex justify-between align-middle items-center relative">
        <Link href="/">
          <Image className="w-[151px] h-[76px] md:w-[202px] md:h-[102px]" src="/colour-logo.svg" alt="Norton Studios Logo" width={604} height={307} priority />
        </Link>

        <details className="lg:hidden">
          <summary className="list-none text-xl cursor-pointer">
            <svg width="38" height="38" aria-hidden="true" viewBox="0 0 24 24">
              <path fill="#3B3752" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"></path>
            </svg>
            <span className="sr-only">Menu</span>
          </summary>
          <div className="absolute z-10 px-8 py-4 left-0 right-0 top-[80px] w-auto bg-tan-500">
            <nav className="flex flex-col">
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

        <div className="hidden lg:flex max-md:mt-6 max-md:py-6 max-md:border-t-2 max-md:border-t-slate-200 items-center">
          <nav>
            {menuItems.map((item) => {
              return (
                <CustomLink
                  key={item.url}
                  href={item.url}
                  className="text-lg relative font-bold p-4 mx-2 hover:no-underline hover:after:content-[''] hover:after:h-1 hover:after:w-full hover:after:block hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:bg-yellow-500 hover:after:mt-2 after:transition-all after:duration-300 after:ease-in-out focus:text-blue-900 focus:no-underline focus:after:content-[''] focus:after:h-1 focus:after:w-full focus:after:block focus:after:absolute focus:after:bottom-0 focus:after:left-0 focus:after:bg-yellow-500 focus:after:mt-2"
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
