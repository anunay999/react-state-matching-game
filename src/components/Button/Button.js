import React from 'react';
import './Button.css';

const Button = (props) => ( 
<button onClick={props.startGame}>
    {props.playing == true? "Reset" : "Start Game"}
</button> )

export default Button
