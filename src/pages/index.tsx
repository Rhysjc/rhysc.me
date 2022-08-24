import * as React from 'react';
import type { HeadFC } from 'gatsby';

import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Skills } from '../components/Skills';

const IndexPage = () => {
  return (
    <>
      <Header />
      <main className='container m-auto'>
        <Hero />
        <Skills />
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <link rel="icon" href="favicon.ico" type="image/x-icon" />
    <title>Rhys Camm</title>
  </>
);
