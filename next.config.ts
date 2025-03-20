import createMDX from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    jsx: true,
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: []
  }
});

export default withMDX({
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
});
