import React from 'react';
import './Button.css'

const Button = (props) => {
    /* 
    Expects props:
    class: CSS classes
    text: String for body of the button
    */
    return (
        <button type="button" className={props.class}>{props.text}</button>
    )
}

export default Button