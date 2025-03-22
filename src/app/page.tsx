import Image from 'next/image';
import fs from 'node:fs';
import { compileMDX } from 'next-mdx-remote/rsc';

import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { CustomLink } from '@/components/CustomLink';
import { Paragraph } from '@/components/Paragraph';

export default async function Home() {
  const caseStudies = fs
    .readdirSync('src/content/case-studies')
    .filter((file) => file.endsWith('.mdx'))
    .map(getContent);

  const caseStudiesContent = await Promise.all(caseStudies);

  return (
    <>
      <div className="bg-blue_bottom bg-repeat-x bg-[center_bottom] pb-[180px] mb-[-2px]">
        <Container className="lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="xl:ml-20">
            <Heading level="h1" className="!leading-[1.2]">
              Provider of Digital Solutions for the Public Sector
            </Heading>
            <Paragraph className="mt-8 leading-[2]">
              Norton Studios is a trusted public sector delivery partner. We specialise in Government Digital Services across the UK, with a particular focus on
              Accessibility (WCAG 2.1/2.2) and Responsive Website design.
            </Paragraph>
          </div>
          <div className="align-middle hidden lg:flex">
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
              <Image
                className="mx-auto lg:m-none mb-20 lg:mb-0 w-[184px] h-180px] lg:w-[456px] lg:h-[448px]"
                src="/best-practice.webp"
                alt="Placeholder image"
                width={456}
                height={448}
              />
            </div>
            <div className="flex flex-col justify-center xl:pr-20">
              <Heading level="h2" className="text-white mb-8">
                Best practices matter to us
              </Heading>
              <Paragraph className="text-white">We believe best practices matter, especially in the public sector.</Paragraph>
              <Paragraph className="text-white">
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
              </Paragraph>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-tan-500 py-[200px]">
        <Container>
          <Heading className="text-center" level="h2">
            What should we put here?
          </Heading>
        </Container>
      </div>

      <div className="bg-yellow-500 bg-tan_top bg-[center_top] pt-[200px] pb-20 bg-no-repeat">
        <Container>
          <div className="lg:grid lg:grid-cols-2 lg:gap-4">
            <div>
              <Heading className="mb-8" level="h2">
                Case Studies
              </Heading>
              <Paragraph>Some of the projects we have been involved with</Paragraph>
              <CustomLink
                href="/case-studies"
                className="inline-block mt-4 hover:underline hover:underline-offset-4 p-2 md:px-4 md:py-3 text-white bg-blue-900 font-bold hover:bg-blue-800"
              >
                See all case studies &gt;
              </CustomLink>
            </div>
            <ul className="mt-8 xl:mt-0 grid grid-cols-3 gap-4">
              {caseStudiesContent.map(({ frontmatter }, i) => {
                if (i > 2) {
                  return null;
                }
                return (
                  <li key={frontmatter.title}>
                    <CustomLink className="p-6 bg-white hover:bg-tan-500 block h-full mb-6" href={`/case-studies/${frontmatter.slug}`}>
                      <Heading className="!text-lg" level="h2">
                        {frontmatter.title}
                      </Heading>
                      <Image className="mt-4" width="100" height="100" src={`/${frontmatter.slug}.webp`} alt={`${frontmatter.title} logo`} />
                    </CustomLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
}

async function getContent(file: string) {
  const content = await compileMDX<{ title: string; slug: string }>({
    source: fs.readFileSync(`src/content/case-studies/${file}`, 'utf-8'),
    options: {
      parseFrontmatter: true,
      scope: {
        slug: file.replace(/\.mdx$/, '')
      }
    }
  });

  content.frontmatter.slug = file.replace(/\.mdx$/, '');

  return content;
}
