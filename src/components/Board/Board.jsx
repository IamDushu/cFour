import React from 'react'
import Timer from '../Timer/Timer'
import "./board.scss"

import boardb from "../../assets/images/board-layer-black-large.svg"
import boardw from "../../assets/images/board-layer-white-large.svg"

const Board = () => {
  return (
    <div className='boardarea'>
      <div className='marker'>marker</div>
      <div className='board'>
        
      </div>
      <Timer />
    </div>
  )
}

export default Board 