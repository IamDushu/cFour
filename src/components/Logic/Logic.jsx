import React, { useContext } from "react"
import "./logic.scss"

import coin from "../../assets/images/counter-red-large.svg"
import coiny from "../../assets/images/counter-yellow-large.svg"
import { GameContext } from "../../context/GameContext"

const Logic = () => {
  let ctx = useContext(GameContext)

  const boards = ctx.column

  const creator = (num) => {
    if (num === 1) {
      return <img src={coin} alt="redcoin" key={Math.random()} />
    } else if (num === 2) {
      return <img src={coiny} alt="yellowcoin" key={Math.random()} />
    }
    return null
  }

  return (
    <>
    <div className="logic">
      <div className="column one">
        {boards[0].map((num) => creator(num))}
      </div>
      <div className="column two">
        {boards[1].map((num) => creator(num))}
      </div>
      <div className="column three">
        {boards[2].map((num) => creator(num))}
      </div>
      <div className="column four">
        {boards[3].map((num) => creator(num))}
      </div>
      <div className="column five">
        {boards[4].map((num) => creator(num))}
      </div>
      <div className="column six">
        {boards[5].map((num) => creator(num))}
      </div>
      <div className="column seven">
        {boards[6].map((num) => creator(num))}
      </div>
    </div>
    <div className="coinAdder">
      <div className="coinAddCol" onClick={() => ctx.coinAdder(0)}></div>
      <div className="coinAddCol" onClick={() => ctx.coinAdder(1)}></div>
      <div className="coinAddCol" onClick={() => ctx.coinAdder(2)}></div>
      <div className="coinAddCol" onClick={() => ctx.coinAdder(3)}></div>
      <div className="coinAddCol" onClick={() => ctx.coinAdder(4)}></div>
      <div className="coinAddCol" onClick={() => ctx.coinAdder(5)}></div>
      <div className="coinAddCol" onClick={() => ctx.coinAdder(6)}></div>
    </div>
    </>
  )
}

export default Logic
