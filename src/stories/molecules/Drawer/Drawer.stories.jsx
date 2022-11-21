import React from "react";
import { Drawer } from "./Drawer";

export default {
    title: 'Molecules/Drawer',
    component: Drawer,
    argTypes: {
        header: {
            name: 'label',
            type: { name: 'string', required: false },
            defaultValue: 'Hello',
            table: {
              type: { summary: 'string' },
              defaultValue: { summary: 'Hello' },
            },
            control: {
              type: 'text'
            }
        },
        onClick: {action: 'clicked'}
    }
}

const Template = (args) => <Drawer {...args} />

export const Default = Template.bind({});

Default.args = {
    header: "Food Ninja",
    menuItems: [
        {
            title: 'Home',
            icon: "home",
            active: true
        },
        {
            title: 'About',
            icon: "about",
            active: false
        },
        {
            title: 'Contact',
            icon: "contact",
            active: false
        }
    ] 
}