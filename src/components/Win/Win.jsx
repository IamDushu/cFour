import React, { useContext } from "react"
import { GameContext } from "../../context/GameContext"
import "./win.scss"

const Win = () => {
  
  const ctx = useContext(GameContext)
  
  const playAgain = () => {
    ctx.setColumn([[], [], [], [], [], [], []])
    ctx.setOneWin(false)
    ctx.setTwoWin(false)
    ctx.setPlayer(ctx.oneWin ? "two" : "one")
    ctx.setIsTie(false)
    ctx.setSeconds(30)
  }

  return (
    <div className="win">
      {ctx.isTie ? <p>ITS'S A</p> : ctx.oneWin ? <p>PLAYER 1</p> : <p>PLAYER 2</p>}
      {ctx.isTie ? <h1>TIE</h1> : <h1>WINS</h1>}
      <div onClick={playAgain}>PLAY AGAIN</div>
    </div>
  )
}

export default Win
