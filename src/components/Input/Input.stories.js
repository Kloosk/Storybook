import React from "react";
import Input from "./Input";

export default {
    title: 'form/Input',
    component: Input,
    onClick: {action: 'clicked'}
}

export const Small = () => <Input variant='small' onClick={() => console.log("Input clicked",process.env.STORYBOOK_THEME)}/>;
export const Normal = () => <Input variant='normal'/>;
export const Big = () => <Input variant='big'/>;


const Template = args => <Input {...args}/>
export const SmallInput = Template.bind({});
SmallInput.args = {
    variant:'small',
    text: 'args small input',

};

