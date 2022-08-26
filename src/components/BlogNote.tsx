import React from 'react';

const Exclamation: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-zinc-100 mr-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
    </svg>
  );
};

export const BlogNote: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='p-4 rounded-md bg-purple-600 mb-6 flex flex-row items-center justify-between'>
      <div>
        <Exclamation />
      </div>
      <p className='text-md text-zinc-100'>{children}</p>
    </div>
  );
};
