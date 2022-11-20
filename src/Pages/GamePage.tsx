import React, { Fragment, useState } from "react";
import HangmanDrawing from "../Components/hangman-drawing/HangmanDrawing";

import { WordList } from "../Assets/Word-storage";
import HangmanWordplay from "../Components/hangman-wordplay/HangmanWordplay";
import HangmanKeyboard from "../Components/hangman-keyboard/HangmanKeyboard";


export interface GamePageProps {
}

const GamePage = (props: GamePageProps) => {

  // const MagicWord = WordList[ Math.floor(Math.random() * (WordList.length -1) ) ]



  let MagicWord = "";
  const getMagicWordHandler = (word: string) => {
    MagicWord = word
  }

  const [score, setScore] = useState(0)

  const [lettersClicked, setLettersClicked] = useState<string | null>("")


  const clickedLetterPassingHandler = (letter: string) => {
    setLettersClicked(prev => prev = prev + letter);
    if (!MagicWord.includes(letter))
      setScore(prev => prev = prev + 1)
    console.log(MagicWord)
    console.log(lettersClicked)
  }



  return (
    <>
      {score<6&&<div>
        <h1>HANGMAN</h1>
        <HangmanDrawing score={score} scoreManager={(value) => setScore(value)} />
        <HangmanWordplay getMagicWord={getMagicWordHandler} lettersClicked={lettersClicked} />
        <HangmanKeyboard getLetter={clickedLetterPassingHandler} />
      </div>}

      {score>=6&&<div>
        <HangmanDrawing score={score} scoreManager={(value) => setScore(value)} />
        <h2>GAME OVER</h2> 
        {/* <p>Correct Word: {MagicWord}</p> */}
        </div>}
    </>
  )
}

export default GamePage;