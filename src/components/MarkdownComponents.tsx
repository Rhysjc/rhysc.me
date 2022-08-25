import { MDXProviderComponentsProp } from '@mdx-js/react';
import React from 'react';

const h2: React.FC<React.PropsWithChildren> = ({ children }) => <h2 className='font-semibold text-3xl md:text-4xl text-zinc-800 dark:text-zinc-100 mb-4'>{children}</h2>;

const p: React.FC<React.PropsWithChildren> = ({ children }) => <p className='text-lg text-zinc-800 dark:text-zinc-100 mb-2 only:mb-0'>{children}</p>;

const blockquote: React.FC<React.PropsWithChildren> = ({ children }) => <blockquote className='pl-4 mt-2 py-4 border-l-2 border-zinc-300 dark:border-zinc-100'>{children}</blockquote>;

const components: MDXProviderComponentsProp = {
  h2,
  p,
  blockquote,
};

export default components;
