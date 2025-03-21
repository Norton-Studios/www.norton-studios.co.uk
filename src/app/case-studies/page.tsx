import fs from 'node:fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import { Heading } from '@/components/Heading';
import { Container } from '@/components/Container';
import { CustomLink } from '@/components/CustomLink';
import { Paragraph } from '@/components/Paragraph';

export const metadata = {
  title: 'Norton Studios Ltd - Case Studies'
};

export default async function CaseStudies() {
  const caseStudies = fs
    .readdirSync('src/content/case-studies')
    .filter((file) => file.endsWith('.mdx'))
    .map(getContent);

  const caseStudiesContent = await Promise.all(caseStudies);

  return (
    <>
      <div className="bg-repeat-x bg-[center_bottom] bg-yellow_bottom pb-[180px] mb-[-2px]">
        <Container>
          <Heading level="h1" className="!leading-[1.2]">
            Case studies
          </Heading>
          <Paragraph className="mt-4 leading-[2]">Some of the projects we have been involved with</Paragraph>
        </Container>
      </div>

      <div className="bg-yellow-500 py-[80px]">
        <Container>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {caseStudiesContent.map(({ frontmatter }) => (
              <li key={frontmatter.title}>
                <CustomLink className="p-6 bg-tan-500 hover:bg-white block h-full" href={`/case-studies/${frontmatter.slug}`}>
                  <Heading className="!text-xl" level="h2">
                    {frontmatter.title}
                  </Heading>
                </CustomLink>
              </li>
            ))}
          </ul>
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
