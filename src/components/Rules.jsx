import React from 'react'
import checkmark from "../assets/images/icon-check.svg"

const Rules = (props) => {
  return (
    <div className="rulesModal">
          <h1>RULES</h1>
          <div>
            <h3>OBJECTIVE</h3>
            <p>
              Be the first player to connect 4 of the same colored discs in a
              row (either vertically, horizontally, or diagonally).
            </p>
            <h3>HOW TO PLAY</h3>
            <p>
              <span>1 </span>Red goes first in the first game.
            </p>
            <p>
              <span>2 </span>Players must alternate turns, and only one disc can
              be dropped in each turn.
            </p>
            <p>
              <span>3 </span>The game ends when there is a 4-in-a-row or a
              stalemate.
            </p>
            <p>
              <span>4 </span>The starter of the previous game goes second on the
              next game.
            </p>
          </div>
          <div className="checkmark" onClick={props.openRulesHandler}>
            <img src={checkmark} alt="checkmark"></img>
          </div>
        </div>
  )
}

export default Rules