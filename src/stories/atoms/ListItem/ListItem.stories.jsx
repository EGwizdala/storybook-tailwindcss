import React from "react";

import { ListItem } from "./ListItem";
import { about, home, contact } from "../../assets/icons";

export default {
    title: 'Atoms/ListItem',
    component: ListItem,
    argTypes: {
        borderColor: { control: 'color' },
        activeColor: { control: false },
        active: {control: 'boolean'}
    },
    decorators: [
        (Story) => (
            <ul style={{ listStyle: "none"}}>
                <Story />
            </ul>
        )
    ]
};


const Template = (args) => <ListItem {...args} />;
    
export const Default = Template.bind({});
Default.args = {
    icon: 'about'
};

export const Active = Template.bind({});
Active.args = {
    icon: 'about',
    active: true,
    activeColor: 'primary',
};

export const About = Template.bind({});
About.args = {
    icon: 'about',
    label: "About"
};


export const Contact = Template.bind({});
Contact.args = {
    icon: 'contact',
    label: "Contact"
};

export const Home = Template.bind({});
Home.args = {
    icon: 'home',
    label: "Home"
};


