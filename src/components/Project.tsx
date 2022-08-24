import React from 'react';
import { Link } from './Link';
import { Paragraph } from './Paragraph';

interface Props {
  name: string
  link: string
}

export const Project: React.FC<React.PropsWithChildren<Props>> = ({ name, link, children }) => {
  return (
    <div>
      <h3 className="font-serif font-semibold text-2xl md:text-3xl text-zinc-800 dark:text-zinc-100"><Link to={link}>{name}</Link></h3>
      <Paragraph>{children}</Paragraph>
    </div>
  );
};
