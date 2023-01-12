import React from 'react';

import { AppStoreDownload } from './AppStoreDownload';

export const StrydeDownloadBanner: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='p-4 rounded-md border-purple-600 border-2 mb-6 flex flex-col sm:flex-row items-center justify-between'>
      <p className='text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-2 sm:mb-0 sm:mr-2'>Stryde is a super flexible, AI powered workout planner for iOS</p>
      <a href="https://apps.apple.com/us/app/stryde-workout-planner/id1640276342" target="_blank" rel="noreferrer">
        <AppStoreDownload />
      </a>
    </div>
  );
};
