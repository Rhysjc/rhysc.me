import React from 'react';

import { Project } from './Project';

export const Projects: React.FC = () => {
  return (
    <div>
      <h2 className='font-semibold text-3xl md:text-4xl text-zinc-800 dark:text-zinc-100 mt-8'>A few side projects</h2>
      <Project name="Stryde" link="https://apps.apple.com/app/stryde/id1640276342">Workout planner built with React Native</Project>
      <Project name="This website" link="https://github.com/Rhysjc/rhysc.me">Gatsby static site deployed to AWS using CloudFormation</Project>
    </div>
  );
};
