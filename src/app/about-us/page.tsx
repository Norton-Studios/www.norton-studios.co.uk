import fs from 'node:fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import { Heading } from '@/components/Heading';
import { Container } from '@/components/Container';
import { CustomLink } from '@/components/CustomLink';
import { Paragraph } from '@/components/Paragraph';
import { ContentFormatter } from '@/components/ContentFormatter';

export const metadata = {
  title: 'Norton Studios Ltd - Our people'
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
                    <CustomLink className="p-6 bg-white hover:bg-tan-500 block h-full" href={`/people/${frontmatter.slug}`}>
                      <Heading className="!text-xl" level="h2">
                        {formattedName}
                      </Heading>
                      <Paragraph>{frontmatter.title}</Paragraph>
                    </CustomLink>
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
