import * as fs from 'node:fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import { ContentFormatter } from '@/components/ContentFormatter';
import { Container } from '@/components/Container';

export const metadata = {
  title: 'Norton Studios - How we work'
};

export default async function Page() {
  const { content } = await compileMDX<{ title: string }>({
    source: fs.readFileSync(`src/content/how-we-work.mdx`, 'utf-8'),
    options: { parseFrontmatter: true }
  });

  return (
    <Container>
      <div className="max-w-3xl mx-auto mb-10 lg:mb-20 pt-4 lg:pt-8">
        <ContentFormatter>{content}</ContentFormatter>
      </div>
    </Container>
  );
}
