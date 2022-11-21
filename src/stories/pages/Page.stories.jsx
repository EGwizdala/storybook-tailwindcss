import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

import { Page } from './Page';

export default {
  title: 'Pages/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Page {...args} />;

export const LoggedOut = Template.bind({});
LoggedOut.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Log in/i });
  await userEvent.click(loginButton);
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};


