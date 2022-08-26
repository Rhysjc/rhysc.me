import React from 'react';
import { graphql, HeadFC } from 'gatsby';

import { Link } from '../../components/Link';
import { Layout } from '../../components/Layout';

interface Node {
  frontmatter: {
    title: string
    slug: string
    date: string
  }
}

interface BlogsData {
  allMdx: {
    nodes: Node[]
  }
}

interface Props {
  data: BlogsData
}

const Blog: React.FC<React.PropsWithChildren<Props>> = ({ data, children }) => {
  return (
    <Layout>
      <div className='mt-6'>
        {data.allMdx.nodes.map((node) => (
          <div key={node.frontmatter.title} className="mb-4">
            <Link to={`/blog/${node.frontmatter.slug}`} internal><h3 className='font-semibold font-serif text-2xl md:text-3xl text-zinc-800 dark:text-zinc-100'>{node.frontmatter.title}</h3></Link>
            <span className='block text-sm text-zinc-500'>{node.frontmatter.date}</span>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          slug
        }
      }
    }
  }
`;

export const Head: HeadFC = () => (
  <>
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <title>Rhys Camm - Blog</title>
    <meta property="og:title" content="Rhys Camm - Blog" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://rhysc.me/blog" />
    <meta property="og:image" content="https://rhysc.me/og-image.png" />
  </>
);

export default Blog;
