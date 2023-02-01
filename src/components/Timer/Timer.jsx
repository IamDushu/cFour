import React, { useContext } from "react"
import "./timer.scss"

import timerRed from "../../assets/images/turn-background-red.svg"
import timerYellow from "../../assets/images/turn-background-yellow.svg"
import { GameContext } from "../../context/GameContext"

const Timer = () => {

  const player = useContext(GameContext).player

  return (
    <div className={player === "one" ? "timer" : "timer yellow"}>
      <img src={player === "one" ? timerRed : timerYellow} alt="timered"></img>
      <div className="info">
        <p>{player === "one" ? "PLAYER 1's TURN" : "PLAYER 2's TURN"}</p>
        <h1>15s</h1>
      </div>
    </div>
  )
}

export default Timer
