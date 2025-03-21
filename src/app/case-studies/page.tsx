import { Container } from '@/components/Container';
import { Heading } from '../../components/Heading';
import fs from "node:fs";
import { compileMDX } from "next-mdx-remote/rsc";

export default async function CaseStudies() {
  const caseStudies = fs
    .readdirSync('src/content/case-studies')
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => compileMDX<{ title: string }>({
      source: fs.readFileSync(`src/content/case-studies/${file}`, 'utf-8'),
      options: { parseFrontmatter: true }
    }));

  const caseStudiesContent = await Promise.all(caseStudies);

  return (
    <div>
      <Container>
        { caseStudiesContent.map(({ content, frontmatter }) => (
        <div key={frontmatter.title}>
          <Heading level="h2">{frontmatter.title}</Heading>
          {content}
        </div>
        )) }
      </Container>
    </div>
  );
}
