import React from 'react';

import { Icon } from './Icon';
import { icons } from '../../assets/icons';

export default {
  title: 'Atoms/Icon',
  component: Icon,
};

export const Labels = (args) => (
  <>
    There are {Object.keys(icons).length} icons
    <ul className='flex justify-start gap-3 m-2'>
      {Object.keys(icons).map(key => (
        <li className='flex flex-col justify-start items-center gap-1' key={key}>
          <Icon icon={key} aria-hidden />
          <div>{key}</div>
        </li>
      ))}
    </ul>
  </>
);

export const NoLabels = (args) => (
  <ul className='flex justify-start gap-3'>
    {Object.keys(icons).map(key => (
      <li minimal key={key}>
        <Icon icon={key} aria-label={key} />
      </li>
    ))}
  </ul>
);

NoLabels.storyName = 'no labels';