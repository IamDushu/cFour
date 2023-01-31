import React, { useState } from "react"
import "./home.scss"

import logo from "../../assets/images/logo.svg"
import playervscpu from "../../assets/images/player-vs-cpu.svg"
import playervsplayer from "../../assets/images/player-vs-player.svg"
import Rules from "../../components/Rules"

const Home = () => {
  const [openRules, setOpenRules] = useState(false)
  const [gameMode, setGameMode] = useState(null)

  const openRulesHandler = () => {
    setOpenRules((prev) => !prev)
  }

  const gameModeHandler = (mode) => {
    setGameMode((prev) => mode)
  }

  return (
    <div className="home">
      {openRules ? (
        <Rules openRulesHandler={openRulesHandler} />
      ) : (
        <div className="mainmenu">
          <div className="logo">
            <img src={logo} alt="logo"></img>
          </div>
          <div className="options">
            <div
              className="gameoption cpu"
              onClick={() => gameModeHandler("cpu")}
            >
              <h3>PLAY VS CPU</h3>
              <img src={playervscpu} alt="playervscpu"></img>
            </div>
            <div
              className="gameoption player"
              onClick={() => gameModeHandler("player")}
            >
              <h3>PLAY VS PLAYER</h3>
              <img src={playervsplayer} alt="playervsplayer"></img>
            </div>
            <div className="gameoption rules" onClick={openRulesHandler}>
              <h3>GAME RULES</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
