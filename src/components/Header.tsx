import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { CustomLink } from '@/components/CustomLink';
import { twMerge } from 'tailwind-merge';

export const Header = () => {
  const buttonClasses =
    'flex hover:underline hover:underline-offset-4 p-2 md:px-4 md:py-3 ml-2 md:ml-6 text-blue-900 bg-yellow-500 font-bold hover:bg-yellow-400';
  const mobileLinkClasses = 'px-2 py-4 hover:underline hover:underline-offset-4';

  const menuItems = [
    {
      label: 'Services',
      url: '/services'
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
          <Image
            className="dark:invert w-[122px] h-[36px] md:w-[183px] md:h-[54px]"
            src="/logo-new.svg"
            alt="Norton Studios Logo"
            width={245}
            height={72}
            priority
          />
        </Link>

        <details className="md:hidden">
          <summary className="list-none text-xl cursor-pointer">
            <svg width="38" height="38" aria-hidden="true" viewBox="0 0 24 24">
              <path fill="#3B3752" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"></path>
            </svg>
            <span className="sr-only">Menu</span>
          </summary>
          <div className="absolute z-10 px-8 py-4 left-0 right-0 top-[54px] w-auto bg-tan-500">
            <nav className="flex flex-col">
              {menuItems.map((item) => {
                return (
                  <CustomLink key={item.url} variant="blue" href={item.url} className={mobileLinkClasses}>
                    {item.label}
                  </CustomLink>
                );
              })}
            </nav>
            <Link href="/talk-to-us" className={twMerge(buttonClasses, 'inline-block text-center px-6 my-4')}>
              Talk to us!
            </Link>
          </div>
        </details>

        <div className="hidden md:flex max-md:mt-6 max-md:py-6 max-md:border-t-2 max-md:border-t-slate-200 items-center">
          <nav>
            {menuItems.map((item) => {
              return (
                <CustomLink key={item.url} href={item.url} className="text-lg font-bold p-4">
                  {item.label}
                </CustomLink>
              );
            })}
          </nav>
          <Link href="/talk-to-us" className={buttonClasses}>
            Talk to us!
          </Link>
        </div>
      </Container>
    </header>
  );
};
