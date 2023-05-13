import React from 'react';
import { Paragraph } from './Paragraph';
import { Link } from './Link';

export const Hero: React.FC = () => {
  return (
    <div className="mt-6 md:mt-12 text-zinc-800 dark:text-zinc-100">
      <h1 className="font-semibold text-6xl md:text-9xl">
        Hi, I&apos;m{' '}
        <span className="relative before:block before:absolute before:inset-x-0 before:top-6 md:before:top-14 before:bottom-3 before:bg-purple-600 before:-skew-x-6 before:-skew-y-3 hover:before:scale-75 before:transition-transform">
          <span className="relative">Rhys</span>
        </span>
      </h1>
      <Paragraph>a Senior Software Engineer based in Surrey</Paragraph>
      <Paragraph>
        I&apos;m currently building at <Link to="https://meetcleo.com">Cleo</Link>
      </Paragraph>
      <Paragraph>
        Previously I&apos;ve been at{' '}
        <Link to="https://secondnature.io">Second Nature</Link>,{' '}
        <Link to="https://loveholidays.com">loveholidays</Link>,{' '}
        <Link to="https://sohohouse.com">Soho House</Link> and{' '}
        <Link to="https://rotaready.com">Rotaready</Link>
      </Paragraph>
    </div>
  );
};
