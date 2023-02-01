import React from 'react'
import Timer from '../Timer/Timer'
import "./board.scss"

import marker from "../../assets/images/marker-red.svg"
import boardb from "../../assets/images/board-layer-black-large.svg"
import boardw from "../../assets/images/board-layer-white-large.svg"
import Logic from '../Logic/Logic'

const Board = () => {
  return (
    <div className='boardarea'>
      <div className='marker'>
        <img src={marker} alt="redmarker" ></img>
      </div>
      <div className='board'>
        <img src={boardb} alt='blackboard' className='blackboard'></img>
        <Logic />
        <img src={boardw} alt='whiteboard' className='whiteboard'></img>
        <Timer />
      </div>
    </div>
  )
}

export default Board 