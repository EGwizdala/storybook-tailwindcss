import React from "react";
import { Burger } from "./Burger";

export default {
    title: 'Atoms/Burger',
    component: 'Burger',
    argTypes: { onClick: { action: 'clicked' } },
}

const Template = (args) => <Burger {...args} />

export const Default = Template.bind({})