import React from "react";
import Input from "./Input";

export default {
    title: 'form/Input',
    component: Input
}

export const Small = () => <Input variant='small'/>;
export const Normal = () => <Input variant='normal'/>;
export const Big = () => <Input variant='big'/>;

Small.storyName = 'Small name';