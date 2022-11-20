import React, { Fragment } from "react";


export interface HomePageProps {
}

const HomePage = (props: HomePageProps) => {

  return(
    <div>
      <h1>HANGMAN</h1>
    <img src="https://img.favpng.com/9/23/5/runescape-hangman-wikia-game-png-favpng-4YYPKj6Si9ffeH05dWtyWadDw_t.jpg" />
      <div>
        <button> START </button>
      </div>
    </div>
  )
    }

export default HomePage;