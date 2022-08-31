import * as React from 'react';
import type { HeadFC } from 'gatsby';

import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Layout } from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Skills />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <link rel="icon" href="favicon.ico" type="image/x-icon" />
    <title>Rhys Camm</title>
    <meta name="description" content="UK based Senior Software Engineer" />
    <meta property="og:title" content="Rhys Camm" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://rhysc.me" />
    <meta property="og:image" content="https://rhysc.me/og-image.png" />
  </>
);
