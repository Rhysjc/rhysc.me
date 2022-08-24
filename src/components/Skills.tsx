import React, { useState } from 'react';

import { SkillTag } from './SkillTag';

const skills: string[] = ['Node', 'TypeScript', 'React', 'AWS', 'REST APIs', 'Tailwind', 'React Native', 'MongoDB', 'Postgres', 'Redis', 'MySQL', 'CI/CD', 'Vue', 'GraphQL', 'Express', 'Koa', 'Gatsby', 'NextJS', 'Git', 'Jest', 'Cypress', 'Storybook'];

export const Skills: React.FC = () => {
  const [filterText, setFilterText] = useState('');

  const filteredSkills = skills.filter(skill => skill.toLowerCase().includes(filterText.toLowerCase()));

  return (
    <div>
      <h2 className='font-semibold text-3xl lg:text-4xl text-zinc-800 dark:text-zinc-100 mt-8'>Some of the tech I've worked with</h2>
      <input type="text" placeholder='Filter' className='bg-transparent outline-none text-zinc-800 dark:text-zinc-100 mb-1 w-full placeholder:text-zinc-40 caret-purple-600' value={filterText} onChange={e => setFilterText(e.target.value)} />
      <div>{filteredSkills.map(skill => <SkillTag key={skill}>{skill}</SkillTag>)}</div>
    </div>
  );
};
