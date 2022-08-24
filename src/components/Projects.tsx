import React from 'react';

import { Project } from './Project';
import { Heading } from './Heading';

export const Projects: React.FC = () => {
  return (
    <div>
      <Heading>A few side projects</Heading>
      <Project name="Stryde" link="https://apps.apple.com/app/stryde/id1640276342">Workout planner built with React Native</Project>
      <Project name="This website" link="https://github.com/Rhysjc/rhysc.me">Gatsby static site deployed to AWS using CloudFormation</Project>
    </div>
  );
};
