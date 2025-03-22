import * as fs from 'node:fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import { ContentFormatter } from '@/components/ContentFormatter';
import { Container } from '@/components/Container';
import { CustomLink } from '@/components/CustomLink';
import { Heading } from '@/components/Heading';

const getData = async ({ params }: PageParams) => {
  const { slug } = await params;
  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: fs.readFileSync(`src/content/people/${slug}.mdx`, 'utf-8'),
    options: { parseFrontmatter: true }
  });
  return { content, frontmatter };
};

export async function generateMetadata({ params }: PageParams) {
  const { frontmatter } = await getData({ params });
  return {
    title: `Norton Studios People - ${frontmatter.title}`
  };
}

export default async function Page({ params }: PageParams) {
  const { content, frontmatter } = await getData({ params });
  const { slug } = await params;

  const formattedName = slug.replace('-', ' ').replace(/\b\w/g, (char: string) => char.toUpperCase());

  return (
    <Container>
      <div className="max-w-3xl mx-auto mb-10 lg:mb-20">
        <CustomLink className="mb-8 inline-block" href="/people">
          &lt; Back to people
        </CustomLink>
        <Heading level="h1" className="mb-8">
          {formattedName}
        </Heading>
        <Heading level="h2" className="mb-6">
          {frontmatter.title}
        </Heading>
        <ContentFormatter>{content}</ContentFormatter>
      </div>
    </Container>
  );
}

export function generateStaticParams() {
  return fs
    .readdirSync('src/content/people')
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
    .map((slug) => ({ slug }));
}

export const dynamicParams = false;

type PageParams = {
  params: Promise<{
    title: string;
    slug: string;
  }>;
};
