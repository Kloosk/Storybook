import React from 'react';
import './Input.css'

const Input = (props) => {
    const {variant='normal',text='Your text...',...rest} = props;
    return (
        <input className={`input ${variant} `} type="text" {...rest} placeholder={text}/>
    );
};

export default Input;