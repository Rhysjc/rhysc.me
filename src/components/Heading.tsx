import React from 'react';

export const Heading: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <h2 className='font-semibold text-3xl md:text-4xl text-zinc-800 dark:text-zinc-100 mt-8'>{children}</h2>
  );
};
