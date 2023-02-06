import React from 'react'
import "./score.scss"

import playerOne from "../../assets/images/player-one.svg"
import playerTwo from "../../assets/images/player-two.svg"

const Score = (props) => {

  let player = ""
  let style=""

  if(props.num === "1"){
     player = playerOne
     style = "score playerOne"
  } else{
    player = playerTwo
    style = "score playerTwo"
  } 

  return (
    <div className={style}>
      <img src={player} alt="player" className={player}></img>
      <p>PLAYER {props.num}</p>
      <h1>{props.score}</h1>
    </div>
  )
}

export default Score