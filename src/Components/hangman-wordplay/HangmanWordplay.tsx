import React, { Fragment, useState } from "react";
import DrawingList from "../../Assets/Hangman-images";
import { WordList } from "../../Assets/Word-storage";

import './HangmanWordplay.scss'

export interface HangmanWordplayProps {
    // MagicWord: string
    lettersClicked: string | null
    getMagicWord(arg: string): void
}

const HangmanWordplay = (props: HangmanWordplayProps) => {

    const [MagicWord, setMagicWord] = useState(WordList[Math.floor(Math.random() * (WordList.length - 1))])
    console.log(WordList.length)
    console.log(Math.floor(Math.random() * (WordList.length - 1)))
    console.log(MagicWord)

    const wordarray = (MagicWord).split('');
    console.log(wordarray)

    props.getMagicWord(MagicWord)

    // const [clickedbuttons, setClickedButtons] = useState(null)


    return (
        <div>
            {MagicWord.split('').map(letter =>
                <span key={letter} className="btn btn-info m-3">
                    {((props.lettersClicked!=null)&&(props.lettersClicked!.includes(letter))) ? letter : "__"}
                </span>
            )}


        </div>
    )
}

export default HangmanWordplay;