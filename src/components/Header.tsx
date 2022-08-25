import React from 'react';

import { DarkModeToggle } from './DarkModeToggle';
import { Email } from './Email';
import { Github } from './Github';
import { Twitter } from './Twitter';
import { Logo } from './Logo';
import { Link } from './Link';

export const Header: React.FC = () => {
  return (
    <header className="w-full">
      <div className="container m-auto flex flex-row justify-between items-center py-4">
        <Logo />
        <div className='flex flex-1 flex-row justify-end items-center'>
          <div className='font-serif mr-4'>
            <Link to="/blog" internal>Blog</Link>
          </div>
          <a href="mailto:rhysjc@gmail.com" target="_blank" rel="noreferrer" className="mr-4"><Email /></a>
          <a href="https://github.com/Rhysjc" target="_blank" rel="noreferrer" className="mr-4"><Github /></a>
          <a href="https://twitter.com/rhysjcamm" target="_blank" rel="noreferrer" className="mr-4"><Twitter /></a>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};
