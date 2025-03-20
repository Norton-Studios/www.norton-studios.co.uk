import * as fs from 'node:fs';
import Head from 'next/head';
import { compileMDX } from 'next-mdx-remote/rsc';

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
      {content}
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
