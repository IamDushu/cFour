import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./game.scss"

import logo from "../../assets/images/logo.svg"
import Score from "../../components/Score/Score"
import Board from "../../components/Board/Board"
import { GameContext } from "../../context/GameContext"
import Menu from "../../components/Menu/Menu"

const Game = () => {
  const ctx = useContext(GameContext)
  const navigate = useNavigate()

  const restart = () => {
    ctx.setColumn([[], [], [], [], [], [], []])
    ctx.setOneWinCount(0)
    ctx.setTwoWinCount(0)
    ctx.setOneWin(false)
    ctx.setTwoWin(false)
    ctx.setPlayer("one")
    ctx.setIsTie(false)
    ctx.setSeconds(30)
  }

  const quit = () => {
    menuRestart()
    navigate("/")
  }

  const menuRestart = () => {
    menuClickHandler()
    restart()
  }

  const menuClickHandler = () => ctx.setIsMenuOpen((prev) => !prev)

  return (
    <div className="game">
      <header>
        {ctx.isMenuOpen && (
          <Menu
            menuClickHandler={menuClickHandler}
            restart={menuRestart}
            quit={quit}
          />
        )}
        <div className="header">
          <div className="menu btn" onClick={menuClickHandler}>
            MENU
          </div>
          <img src={logo} alt="logo"></img>
          <div className="restart btn" onClick={restart}>
            RESTART
          </div>
        </div>
      </header>
      <div className="gamearea">
        <Score num="1" score={ctx.oneWinCount} />
        <Board />
        <Score num="2" score={ctx.twoWinCount} />
      </div>
      <div className="mobilegame">
        <div className="scorearea">
          <Score num="1" score={ctx.oneWinCount} />
          <Score num="2" score={ctx.twoWinCount} />
        </div>
        <Board />
      </div>
      {ctx.oneWin || ctx.twoWin ? (
        ctx.oneWin ? (
          <div className="foot one"></div>
        ) : (
          <div className="foot two"></div>
        )
      ) : (
        <div className="foot"></div>
      )}
    </div>
  )
}

export default Game
