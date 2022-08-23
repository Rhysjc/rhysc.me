import React from 'react';

import { DarkModeToggle } from './DarkModeToggle';
import { Email } from './Email';
import { Github } from './Github';
import { Twitter } from './Twitter';

export const Header: React.FC = () => {
  return (
    <header className="w-full">
      <div className="container m-auto flex flex-row justify-end items-center py-4">
        <a href="mailto:hi@rhysc.me" target="_blank" rel="noreferrer" className="mr-4"><Email /></a>
        <a href="https://github.com/Rhysjc" target="_blank" rel="noreferrer" className="mr-4"><Github /></a>
        <a href="https://twitter.com/rhysjcamm" target="_blank" rel="noreferrer" className="mr-4"><Twitter /></a>
        <DarkModeToggle />
      </div>
    </header>
  );
};
