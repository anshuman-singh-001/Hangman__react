import React, { Fragment, useState } from "react";
import DrawingList from "../../Assets/Hangman-images";

import './HangmanDrawing.scss'

export interface HangmanDrawingProps {
  score: number
  scoreManager(arg: any): any
}

const HangmanDrawing = (props: HangmanDrawingProps) => {

  return (
    <div >

      <img src={DrawingList[props.score]} className="d-block"></img>

      {/* <div className="btn-group">
            <div className="btn btn-primary" onClick={()=>props.scoreManager(props.score+1)}> + </div>
            <div>{props.score}</div>
            <div className="btn btn-danger" onClick={()=>props.scoreManager(props.score-1)}> - </div>
        </div> */}

      {/* <div></div> */}




    </div>
  )
}

export default HangmanDrawing;