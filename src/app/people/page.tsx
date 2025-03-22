import fs from 'node:fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import { Heading } from '@/components/Heading';
import { Container } from '@/components/Container';
import { CustomLink } from '@/components/CustomLink';
import { Paragraph } from '@/components/Paragraph';

export const metadata = {
  title: 'Norton Studios Ltd - Our people'
};

export default async function CaseStudies() {
  const people = fs
    .readdirSync('src/content/people')
    .filter((file) => file.endsWith('.mdx'))
    .map(getContent);

  const peopleContent = await Promise.all(people);

  return (
    <>
      <div className="bg-repeat-x bg-[center_bottom] bg-yellow_bottom pb-[180px] mb-[-2px]">
        <Container>
          <Heading level="h1" className="!leading-[1.2]">
            Our people
          </Heading>
          <Paragraph className="mt-4 leading-[2]">Just some of the talented people who make up Norton Studios.</Paragraph>
        </Container>
      </div>

      <div className="bg-yellow-500 py-[80px]">
        <Container>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {peopleContent.map(({ frontmatter }) => {
              const formattedName = frontmatter.slug.replace('-', ' ').replace(/\b\w/g, (char: string) => char.toUpperCase());

              return (
                <li key={frontmatter.title}>
                  <CustomLink className="p-6 bg-white hover:bg-tan-500 block h-full" href={`/people/${frontmatter.slug}`}>
                    <Heading className="!text-xl" level="h2">
                      {formattedName}
                    </Heading>
                    <Paragraph>{frontmatter.title}</Paragraph>
                    <Paragraph>Awesomeness rating: {frontmatter.awesomeness}</Paragraph>
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
  const content = await compileMDX<{ title: string; slug: string; awesomeness: string }>({
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
