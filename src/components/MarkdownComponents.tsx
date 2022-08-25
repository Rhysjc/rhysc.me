import { MDXProviderComponentsProp } from '@mdx-js/react';
import React from 'react';

const h2: React.FC<React.PropsWithChildren> = ({ children }) => <h2 className='font-semibold text-3xl md:text-4xl text-zinc-800 dark:text-zinc-100 mt-4 first:mt-0'>{children}</h2>;

const p: React.FC<React.PropsWithChildren> = ({ children }) => <p className='text-lg text-zinc-800 dark:text-zinc-100 mb-2 only:mb-0'>{children}</p>;

const blockquote: React.FC<React.PropsWithChildren> = ({ children }) => <blockquote className='pl-4 mt-2 py-4 border-l-2 border-zinc-300 dark:border-zinc-100'>{children}</blockquote>;

const code: React.FC<React.PropsWithChildren> = ({ children }) => <code className='font-serif text-sm bg-zinc-200 py-0.5 px-1 rounded-sm text-zinc-800'>{children}</code>;

const components: MDXProviderComponentsProp = {
  h2,
  p,
  blockquote,
  code,
};

export default components;
