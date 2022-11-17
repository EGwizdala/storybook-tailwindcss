import React from 'react';

import { Navigation } from './Navigation';

export default {
  title: 'Molecules/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Navigation {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
