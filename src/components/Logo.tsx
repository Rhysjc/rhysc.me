import React from 'react';
import { Link } from 'gatsby';

export const Logo: React.FC = () => {
  return (
    <Link className='group outline-none' to='/'>
      <div className='w-10 h-10 border-b-4 border-purple-600 transition-[border-bottom-width] group-hover:border-b-8 group-focus-within:border-b-8' />
    </Link>
  );
};
