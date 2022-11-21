import React from "react";
import { Card } from "./Card";

export default {
    title: 'Molecules/Card',
    component: 'Card',
    argTypes: {
        badgeSize: {
            options: ['small', 'medium'],
            control: { type: 'select' },
          },
    },
    decorators: [
        (Story) => (
            <div style={{ display: "flex", justifyContent: "center", width: "100%"}}>
                <div style={{ flexBasis: "50%" }}>
                    <Story />
                </div>
            </div>
        )
    ]
}

const Template = (args) => <Card {...args}/>

export const Default = Template.bind({})

Default.args = {
    card: {
        image: "curry.jpg",
        title: "Tofu curry",
        subtitle: "Recipe by Mario",
        time: "25 minutes"
    },
    badgeSize: "small"
};

Default.parameters = {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
            { name: 'blue', value: '#00f' },
            { name: 'yellow', value: '#0ff' },
      ],
    },
};