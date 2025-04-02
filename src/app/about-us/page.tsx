import fs from 'node:fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import { Heading } from '@/components/Heading';
import { Container } from '@/components/Container';
import { Paragraph } from '@/components/Paragraph';
import { ContentFormatter } from '@/components/ContentFormatter';
import Image from "next/image";

export const metadata = {
  title: 'Norton Studios Ltd - About us'
};

export default async function People() {
  const people = fs
    .readdirSync('src/content/people')
    .filter((file) => file.endsWith('.mdx'))
    .map(getContent);

  const { content } = await compileMDX<{ title: string }>({
    source: fs.readFileSync(`src/content/about-us.mdx`, 'utf-8'),
    options: { parseFrontmatter: true }
  });

  const peopleContent = await Promise.all(people);

  return (
    <>
      <div className="bg-repeat-x bg-[center_bottom] bg-yellow_bottom pb-[200px] lg:pb-[220px] pt-4 lg:pt-8 mb-[-2px]">
        <Container className="max-w-3xl mx-auto">
          <ContentFormatter>{content}</ContentFormatter>
        </Container>
      </div>

      <div id="people" className="bg-yellow-500 py-[80px]">
        <Container>
          <Heading level="h2" className="mb-6">
            Our people
          </Heading>
          <Paragraph className="mt-6 leading-[2]">Just some of the talented people who make up Norton Studios.</Paragraph>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
            {peopleContent
              .toSorted((a, b) => a.frontmatter.awesomeness - b.frontmatter.awesomeness)
              .map(({ frontmatter }) => {
                const formattedName = frontmatter.slug.replace('-', ' ').replace(/\b\w/g, (char: string) => char.toUpperCase());

                return (
                  <li key={frontmatter.title}>
                    <a
                      className="block p-6 pb-4 bg-white hover:bg-tan-500 transition-all duration-300 h-full mb-6 border-b-8 border-white hover:border-blue-900"
                      href={`/people/${frontmatter.slug}`}
                    >
                      <div className="flex items-center">
                        <Image className="rounded-full" width="100" height="100" src={`/people/${frontmatter.slug}.png`} alt={`${formattedName} logo`} />
                        <div className="ml-4">
                          <Heading className="!text-lg" level="h2">
                            {formattedName}
                          </Heading>
                          <Paragraph className="mb-0">{frontmatter.title}</Paragraph>
                        </div>
                      </div>
                    </a>
                  </li>
                );
              })}
          </ul>
        </Container>
      </div>
    </>
  );
}

async function getContent(file: string) {
  const content = await compileMDX<{ title: string; slug: string; awesomeness: number }>({
    source: fs.readFileSync(`src/content/people/${file}`, 'utf-8'),
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
