import { Container } from '@/components/Container';
import { Heading } from '../../components/Heading';
import fs from "node:fs";
import { compileMDX } from "next-mdx-remote/rsc";
import Link from "next/link";

export default async function CaseStudies() {
  const caseStudies = fs
    .readdirSync('src/content/case-studies')
    .filter((file) => file.endsWith('.mdx'))
    .map(getContent);

  const caseStudiesContent = await Promise.all(caseStudies);
  console.log(caseStudiesContent[0]);
  return (
    <div>
      <Container>
        { caseStudiesContent.map(({ content, frontmatter }) => (
        <div key={frontmatter.title}>
          <Heading level="h2">{frontmatter.title}</Heading>
          {content}
          <Link href={"/case-studies/" + frontmatter.slug }>Go to case study</Link>
        </div>
        )) }
      </Container>
    </div>
  );
}

async function getContent(file: string) {
  const content = await compileMDX<{ title: string, slug: string }>({
    source: fs.readFileSync(`src/content/case-studies/${file}`, 'utf-8'),
    options: {
      parseFrontmatter: true,
      scope: {
        slug: file.replace(/\.mdx$/, '')
      }
    },
  });

  content.frontmatter.slug = file.replace(/\.mdx$/, '');

  return content;
}