import React from 'react'
import "./score.scss"

import playerOne from "../../assets/images/player-one.svg"
import playerTwo from "../../assets/images/player-two.svg"

const Score = (props) => {

  let player = ""

  if(props.num === "1"){
     player = playerOne
  } else  player = playerTwo

  return (
    <div className='score'>
      <img src={player} alt="player"></img>
      <p>PLAYER {props.num}</p>
      <h1>{props.score}</h1>
    </div>
  )
}

export default Score