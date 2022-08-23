import React from 'react';

import './src/styles/global.css';
import { DarkModeProvider } from './src/providers/DarkModeProvider';

import { WrapRootElementBrowserArgs } from 'gatsby';

export const wrapRootElement = ({ element }: WrapRootElementBrowserArgs) => {
  return (
    <DarkModeProvider>{element}</DarkModeProvider>
  );
};
