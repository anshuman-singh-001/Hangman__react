import React, { Fragment, useState } from "react";
// import DrawingList from "../../Assets/Hangman-images";
import HangmanKeyboardButton from "./HangmanKeyboardButton";

import './HangmanKeyboard.scss'

export interface HangmanKeyboardProps {
    getLetter(arg: string): void
}

const HangmanKeyboard = (props: HangmanKeyboardProps) => {

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const letterClickHandler = (n: any) => {
        console.log(n)
        console.log(n.target.innerHTML)


    }

    // const[letterClicked, setLetterClicked] = useState(null)

    const clickedLetterPassingHandler = (letter: string) => {
        props.getLetter(letter);
    }

    

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col col-lg-6 col-md-8 col-sm-10  p-3 border">
                        {alphabet.map(letter =>
                            // <span key={letter}
                            //     id={letter}
                            //     className="btn btn-warning m-2"
                            //     onClick={()=>{
                                    
                            //     }}
                            // >{letter.toUpperCase()}
                            // </span>
                            <HangmanKeyboardButton key={letter} letter={letter} clickedLetterValue={clickedLetterPassingHandler} />
                        )}
                    </div>
                    <div className="col"></div>
                </div>
            </div>



        </div>
    )
}

export default HangmanKeyboard;