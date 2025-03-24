import * as fs from 'node:fs';
import Image from 'next/image';
import { compileMDX } from 'next-mdx-remote/rsc';
import { ContentFormatter } from '@/components/ContentFormatter';
import { Container } from '@/components/Container';
import { CustomLink } from '@/components/CustomLink';

const getData = async ({ params }: PageParams) => {
  const { slug } = await params;
  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: fs.readFileSync(`src/content/case-studies/${slug}.mdx`, 'utf-8'),
    options: { parseFrontmatter: true }
  });
  return { content, frontmatter };
};

export async function generateMetadata({ params }: PageParams) {
  const { frontmatter } = await getData({ params });
  return {
    title: `Norton Studios Case Study - ${frontmatter.title}`
  };
}

export default async function Page({ params }: PageParams) {
  const { content } = await getData({ params });
  const { slug } = await params;

  return (
    <Container>
      <div className="max-w-3xl mx-auto mb-10 lg:mb-20">
        <CustomLink className="mb-8 inline-block" href="/case-studies">
          &lt; Back to case studies
        </CustomLink>
        <Image className="mb-12" width="200" height="100" src={`/${slug}.webp`} alt={`${slug} logo`} />
        <ContentFormatter>{content}</ContentFormatter>
      </div>
    </Container>
  );
}

export function generateStaticParams() {
  return fs
    .readdirSync('src/content/case-studies')
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
    .map((slug) => ({ slug }));
}

export const dynamicParams = false;

type PageParams = {
  params: Promise<{
    slug: string;
  }>;
};
