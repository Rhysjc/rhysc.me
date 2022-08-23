import React from 'react';

interface Props {
  to: string
}

export const Link: React.FC<React.PropsWithChildren<Props>> = ({ to, children }) => {
  return <a href={to} target="_blank" rel="noreferrer" className='inline-block border-b-2 border-purple-600 transition-[padding-bottom,border-bottom-width] outline-none pb-0.5 hover:border-b-4 hover:pb-0 focus-within:border-b-4 focus-within:pb-0 '>{children}</a>;
};
