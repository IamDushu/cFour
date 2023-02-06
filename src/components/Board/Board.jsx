import React, { useContext, useEffect, useState } from 'react'
import Timer from '../Timer/Timer'
import "./board.scss"

import markerred from "../../assets/images/marker-red.svg"
import markeryellow from "../../assets/images/marker-yellow.svg"
import boardb from "../../assets/images/board-layer-black-large.svg"
import boardw from "../../assets/images/board-layer-white-large.svg"
import Logic from '../Logic/Logic'
import Win from '../Win/Win'
import { GameContext } from '../../context/GameContext'

const Board = () => {

  const ctx = useContext(GameContext)

  const oneWin = useContext(GameContext).oneWin
  const twoWin = useContext(GameContext).twoWin
  const isWin = oneWin || twoWin

  // const [x, setX] = useState()
  // const [y, setY] = useState()

  // useEffect(
  //   () => {
  //     const update = (e) => {
  //       setX(e.x)
  //       setY(e.y)
  //     }
  //     window.addEventListener('mousemove', update)
  //     window.addEventListener('touchmove', update)
  //     return () => {
  //       window.removeEventListener('mousemove', update)
  //       window.removeEventListener('touchmove', update)
  //     }
  //   },
  //   [setX, setY]
  // )


  return (
    <div className='boardarea'>
      {/* <div className='marker'>
        <img src={ctx.player === "one" ? markerred : markeryellow} alt="redmarker" ></img>
      </div> */}
      <div className='board'>
        <img src={boardb} alt='blackboard' className='blackboard'></img>
        <Logic />
        <img src={boardw} alt='whiteboard' className='whiteboard'></img>
        {isWin || ctx.isTie ? <Win /> : <Timer />} 
      </div>
    </div>
  )
}

export default Board 