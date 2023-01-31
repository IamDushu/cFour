import React from "react"
import "./game.scss"

import logo from "../../assets/images/logo.svg"
import Score from "../../components/Score/Score"
import Board from "../../components/Board/Board"

const Game = () => {
  return (
    <div>
      <header>
        <div className="header">
          <div className="menu btn">MENU</div>
          <img src={logo} alt="logo"></img>
          <div className="restart btn">RESTART</div>
        </div>
      </header>
      <div className="gamearea">
        <Score />
        <Board />
        <Score />
      </div>
      <footer></footer>
    </div>
  )
}

export default Game
