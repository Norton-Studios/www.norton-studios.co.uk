import * as fs from 'node:fs';
import Head from 'next/head';
import { compileMDX } from 'next-mdx-remote/rsc';
import { CaseStudy } from '@/components/CaseStudy';
import { Container } from '@/components/Container';
import { CustomLink } from '@/components/CustomLink';

export default async function Page({ params }: PageParams) {
  const { slug } = await params;
  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: fs.readFileSync(`src/content/case-studies/${slug}.mdx`, 'utf-8'),
    options: { parseFrontmatter: true }
  });

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <Container>
        <div className="max-w-3xl mx-auto mb-10 lg:mb-20">
          <CustomLink className="mb-8 inline-block" href="/case-studies">
            &lt; Back to case studies
          </CustomLink>
          <CaseStudy>{content}</CaseStudy>
        </div>
      </Container>
    </>
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
