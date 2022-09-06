import React from 'react';
import { Link } from './Link';
import { Paragraph } from './Paragraph';

interface Props {
  name: string
  link: string
  extras?: React.ReactNode
}

export const Project: React.FC<React.PropsWithChildren<Props>> = ({ name, link, children, extras }) => {
  return (
    <div className='md:flex flex-row justify-between items-center'>
      <div>
        <h3 className="font-serif font-semibold text-2xl md:text-3xl text-zinc-800 dark:text-zinc-100"><Link to={link}>{name}</Link></h3>
        {extras && <div className='flex justify-center md:hidden my-1'>{extras}</div>}
        <Paragraph>{children}</Paragraph>
      </div>
      {extras && <div className='hidden md:block'>{extras}</div>}
    </div>
  );
};
