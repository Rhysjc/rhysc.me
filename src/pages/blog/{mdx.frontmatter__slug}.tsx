import React from 'react';
import { graphql, HeadFC } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

import { Layout } from '../../components/Layout';
import MarkdownComponents from '../../components/MarkdownComponents';

// Seems like GraphQL typegen is broken in the current Gatsby version as they no longer support named queries
interface BlogPostData {
  mdx: {
    frontmatter: {
      title: string
      date: string
      slug: string
    }
    body: string
  }
}

interface Props {
  data: BlogPostData
}

const BlogPost: React.FC<React.PropsWithChildren<Props>> = ({ data, children }) => {
  return (
    <Layout>
      <div className='max-w-full md:max-w-5xl m-auto'>
        <div>
          <h1 className='inline-block font-semibold font-serif text-xl md:text-3xl text-zinc-800 dark:text-zinc-100 mt-5 mb-5 border-b-2 border-purple-600 transition-[padding-bottom,border-bottom-width] pb-0.5 hover:border-b-4 hover:pb-0'>{data.mdx.frontmatter.title}</h1>
        </div>
        <MDXProvider components={MarkdownComponents}>{children}</MDXProvider>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        slug
      }
      body
    }
  }
`;

export const Head: HeadFC<BlogPostData> = ({ data }) => (
  <>
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <title>{data.mdx.frontmatter.title}</title>
  </>
);

export default BlogPost;
