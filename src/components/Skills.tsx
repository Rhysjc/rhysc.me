import React from 'react';

import { SkillTag } from './SkillTag';
import { Heading } from './Heading';

const skills: string[] = ['Node', 'TypeScript', 'React', 'AWS', 'REST APIs', 'Tailwind', 'React Native', 'MongoDB', 'Postgres', 'Redis', 'MySQL', 'CI/CD', 'Vue', 'GraphQL', 'Express', 'Koa', 'Gatsby', 'NextJS', 'Git', 'Jest', 'Cypress', 'Storybook'];

export const Skills: React.FC = () => {
  return (
    <div>
      <Heading>Some of the tech I've worked with</Heading>
      <div className='mt-1'>{skills.map(skill => <SkillTag key={skill}>{skill}</SkillTag>)}</div>
    </div>
  );
};
