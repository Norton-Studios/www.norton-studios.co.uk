import fs from 'node:fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import { Heading } from '@/components/Heading';
import { Container } from '@/components/Container';
import { Paragraph } from '@/components/Paragraph';
import Image from 'next/image';
import { MarkdownPageContainer } from '@/components/MarkdownPageContainer';

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
      <div className="bg-repeat-x bg-[center_bottom] bg-yellow_bottom pb-[200px] lg:pb-[220px] mb-[-2px]">
        <MarkdownPageContainer>
          <Heading level="h1" underline>
            Case studies
          </Heading>
          <Paragraph className="mt-6 leading-[2]">With over a decade of experience, we&#39;ve delivered impactful solutions for government agencies, public sector organisations, non-profits, and private sector companies. Our case studies highlight the depth and breadth of our work—real-world examples that demonstrate how we solve complex challenges, drive innovation, and create lasting value for our clients.</Paragraph>
        </MarkdownPageContainer>
      </div>

      <div className="bg-yellow-500 py-[80px]">
        <Container>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {caseStudiesContent
              .filter(({ frontmatter }) => frontmatter.published)
              .map(({ frontmatter }) => (
                <li key={frontmatter.title}>
                  <a
                    className="flex flex-col justify-between p-6 pb-4 bg-white hover:bg-tan-500 transition-all duration-300 h-full mb-6 border-b-8 border-white hover:border-blue-900"
                    href={`/case-studies/${frontmatter.slug}`}
                  >
                    <Heading className="!text-xl" level="h2">
                      {frontmatter.title}
                    </Heading>
                    <Image width="150" height="150" src={`/${frontmatter.slug}.webp`} alt={`${frontmatter.slug} logo`} />
                  </a>
                </li>
              ))}
          </ul>
        </Container>
      </div>
    </>
  );
}

async function getContent(file: string) {
  const content = await compileMDX<{ title: string; slug: string; published: boolean; awesomeness: string }>({
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
