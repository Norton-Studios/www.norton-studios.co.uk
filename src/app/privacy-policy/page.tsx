import * as fs from 'node:fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import { ContentFormatter } from '@/components/ContentFormatter';
import { MarkdownPageContainer } from '@/components/MarkdownPageContainer';

export const metadata = {
  title: 'Norton Studios - Privacy Policy'
};

export default async function Page() {
  const { content } = await compileMDX<{ title: string }>({
    source: fs.readFileSync(`src/content/privacy-policy.mdx`, 'utf-8'),
    options: { parseFrontmatter: true }
  });

  return (
    <MarkdownPageContainer>
      <ContentFormatter>{content}</ContentFormatter>
    </MarkdownPageContainer>
  );
}

export const dynamicParams = false;
