import React from 'react';

import { Header } from './Header';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='container m-auto'>
        {children}
      </main>
    </>
  );
};
