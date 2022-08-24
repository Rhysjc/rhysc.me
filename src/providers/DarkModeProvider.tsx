import React, { createContext, useState } from 'react';
import { Helmet } from 'react-helmet';

interface DarkModeContextType {
  darkMode: boolean
  setDarkMode: (enabled: boolean) => void
}

export const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  setDarkMode: () => {},
});

export const DarkModeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(window.matchMedia?.('(prefers-color-scheme: dark)').matches);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
      <Helmet>
        <body className={`${darkMode ? 'dark bg-zinc-800' : 'bg-zinc-100'} px-2 transition-[background-color]`} />
      </Helmet>
    </DarkModeContext.Provider>
  );
};
