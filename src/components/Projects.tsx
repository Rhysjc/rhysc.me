import React from 'react';

import { Project } from './Project';
import { Heading } from './Heading';

export const Projects: React.FC = () => {
  return (
    <div>
      <Heading>A few side projects</Heading>
      <Project name="Stryde" link="https://apps.apple.com/app/stryde/id1640276342" extras={<a href="https://www.producthunt.com/products/stryde?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-stryde" target="_blank" rel="noreferrer"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=357980&theme=dark&period=daily" alt="Stryde - A&#0032;super&#0032;simple&#0032;&#0038;&#0032;flexible&#0032;workout&#0032;planner | Product Hunt" style={{ width: '250px', height: '55px' }} width="250" height="54" /></a>}>Workout planner built with React Native</Project>
      <Project name="This website" link="https://github.com/Rhysjc/rhysc.me">Gatsby static site deployed to AWS using CloudFormation</Project>
    </div>
  );
};
