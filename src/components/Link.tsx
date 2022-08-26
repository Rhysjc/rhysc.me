import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

interface Props {
  to: string
  internal?: boolean
}

export const Link: React.FC<React.PropsWithChildren<Props>> = ({ to, internal = false, children }) => {
  const classes = 'inline-block border-b-2 border-purple-600 transition-[padding-bottom,border-bottom-width] outline-none pb-0.5 hover:border-b-4 hover:pb-0 focus-within:border-b-4 focus-within:pb-0';

  if (internal) {
    return <GatsbyLink className={classes} to={to}>{children}</GatsbyLink>;
  }

  return <a href={to} target="_blank" rel="noreferrer" className={classes}>{children}</a>;
};
