import React from 'react';

export const SkillTag: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='inline-block bg-purple-600 text-zinc-100 rounded-3xl px-4 py-1 text-sm mr-2 last:mr-0 font-serif mb-2'><span>{children}</span></div>
  );
};
