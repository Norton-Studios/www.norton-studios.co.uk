import { Container } from '@/components/Container';
import { twMerge } from 'tailwind-merge';
import { CustomLink } from '@/components/CustomLink';

const links = [
  {
    href: '/terms-of-use',
    text: 'Terms of use'
  },
  {
    href: '/privacy-policy',
    text: 'Privacy policy'
  },
  {
    href: '/accessibility',
    text: 'Accessibility'
  }
];

export const Footer = () => {
  return (
    <footer className="bg-blue-900 py-[100px]">
      <Container className="flex flex-col">
        <ul className="mx-auto mb-4">
          {links.map((link, i) => {
            const linksLength = links.length - 1;
            return (
              <li className="inline-block" key={link.href}>
                <CustomLink
                  href={link.href}
                  variant="yellow"
                  className={twMerge('px-2 lg:px-4 leading-none', i < linksLength && 'border-r-2 border-yellow-500')}
                >
                  {link.text}
                </CustomLink>
              </li>
            );
          })}
        </ul>
        <p className="text-center text-white">&copy; {new Date().getFullYear()} Norton Studios</p>
      </Container>
    </footer>
  );
};
