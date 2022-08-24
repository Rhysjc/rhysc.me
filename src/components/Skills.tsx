import React from 'react';

import { SkillTag } from './SkillTag';

const skills: string[] = ['Node', 'TypeScript', 'React', 'AWS', 'REST APIs', 'Tailwind', 'React Native', 'MongoDB', 'Postgres', 'Redis', 'MySQL', 'CI/CD', 'Vue', 'GraphQL', 'Express', 'Koa', 'Gatsby', 'NextJS', 'Git', 'Jest', 'Cypress', 'Storybook'];

export const Skills: React.FC = () => {
  return (
    <div>
      <h2 className='font-semibold text-3xl md:text-4xl text-zinc-800 dark:text-zinc-100 mt-8 mb-1'>Some of the tech I've worked with</h2>
      <div>{skills.map(skill => <SkillTag key={skill}>{skill}</SkillTag>)}</div>
    </div>
  );
};
