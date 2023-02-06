import React, { useContext, useEffect } from "react"
import "./timer.scss"

import timerRed from "../../assets/images/turn-background-red.svg"
import timerYellow from "../../assets/images/turn-background-yellow.svg"
import { GameContext } from "../../context/GameContext"

const Timer = () => {

  const ctx = useContext(GameContext)
  const player = useContext(GameContext).player

  useEffect(() => {
    const interval = setInterval(() => {
      if(ctx.seconds !== 0){
        ctx.setSeconds(ctx.seconds - 1);
      }
    }, 1000);
    if(ctx.seconds === 0){
      if(player === "one"){
        ctx.setTwoWin(true)
        ctx.setTwoWinCount(prev => prev+1)
      }
      if(player === "two"){
        ctx.setOneWin(true)
        ctx.setOneWinCount(prev => prev+1)
      }
    }
    return () => clearInterval(interval);
  }, [ctx.seconds, ctx, player]);

  return (
    <div className={player === "one" ? "timer" : "timer yellow"}>
      <img src={player === "one" ? timerRed : timerYellow} alt="timered"></img>
      <div className="info">
        <p>{player === "one" ? "PLAYER 1's TURN" : "PLAYER 2's TURN"}</p>
        <h1>{ctx.seconds}s</h1>
      </div>
    </div>
  )
}

export default Timer
