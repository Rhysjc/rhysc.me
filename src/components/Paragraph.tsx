import React from 'react';

export const Paragraph: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <p className='font-serif text-xl md:text-2xl text-zinc-800 dark:text-zinc-100 mb-5'>{children}</p>;
};
