import Image from 'next/image';

import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { CustomLink } from '@/components/CustomLink';

export default function Home() {
  return (
    <>
      <div className="bg-blue_bg bg-repeat-x bg-[center_bottom] pb-[180px] lg:pb-[260px] mb-[-2px]">
        <Container className="lg:grid lg:grid-cols-2 lg:gap-4">
          <div>
            <Heading level="h1" className="!leading-[1.2]">
              Provider of Digital Solutions for the Public Sector
            </Heading>
            <p className="text-lg mt-8">
              Norton Studios is a trusted public sector delivery partner. We specialise in Government Digital Services across the UK, with a particular focus on
              Accessibility (WCAG 2.1/2.2) and Responsive Website design.
            </p>
          </div>
          <div className="flex align-middle">
            <Image
              className="mx-auto mt-8 lg:md-0 w-[60px] h-[60px] lg:w-[137px] lg:h-[138px]"
              src="/hero-logo.svg"
              alt="Norton Studios Logo"
              width={137}
              height={138}
            />
          </div>
        </Container>
      </div>
      <div className="bg-blue-900 py-[50px] lg:py-[100px]">
        <Container>
          <div className="lg:grid lg:grid-cols-2 lg:gap-4">
            <div>
              <Image className="w-[92px] h-[90px] lg:w-[456px] lg:h-[448px]" src="/best-practice.webp" alt="Placeholder image" width={456} height={448} />
            </div>
            <div>
              <Heading level="h2" className="text-white mb-8">
                Best practices matter to us
              </Heading>
              <p className="text-white text-lg">We believe best practices matter, especially in the public sector.</p>
              <p className="text-white text-lg">
                That&apos;s why we are vocal advocates for{' '}
                <CustomLink variant="yellow" target="_blank" href="https://www.gov.uk/service-manual/service-standard/point-12-make-new-source-code-open">
                  Coding in the open
                </CustomLink>{' '}
                and are practitioners of the{' '}
                <CustomLink
                  variant="yellow"
                  target="_blank"
                  href="https://gds-way.digital.cabinet-office.gov.uk/standards/programming-languages.html#programming-languages"
                >
                  GDS Way
                </CustomLink>
                .
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-tan-500 py-[200px]">
        <Container>
          <Heading level="h2">Tan section</Heading>
        </Container>
      </div>
      <div className="bg-yellow-500 bg-tan_top bg-[center_top] py-[200px] bg-no-repeat">
        <Container>
          <Heading level="h2">Yellow section</Heading>
        </Container>
      </div>
    </>
  );
}
