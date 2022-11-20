import React, { Fragment, useState } from "react";
// import DrawingList from "../../Assets/Hangman-images";

import './HangmanKeyboard.scss'

export interface HangmanKeyboardButtonProps {
    letter: string
    clickedLetterValue(arg: string):void
}

const HangmanKeyboardButton = (props: HangmanKeyboardButtonProps) => {

    // const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // let className = ""
    const [className, setClassName] = useState("btn btn-warning m-2")

    return (
        <span key={props.letter}
            id={props.letter}
            className={className}
            onClick={() => {
                setClassName(prev=> prev= prev + " disabled")
                console.log(props.letter + " is clicked.")
                props.clickedLetterValue(props.letter);
            }}
        >{props.letter.toUpperCase()}
        </span>


    
    )
}

export default HangmanKeyboardButton;