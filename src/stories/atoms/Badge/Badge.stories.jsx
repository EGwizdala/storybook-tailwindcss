import React from 'react';

import { Badge } from './Badge';

export default {
    title: 'Atoms/Badge',
    component: Badge,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
};

const Template = (args) => <Badge {...args} />;

export const Small = Template.bind({});

Small.args = {
    size: "small",
    label: "25 minutes"
};

export const Medium = Template.bind({});

Medium.args = {
    size: "medium",
    label: "34 minutes"
};