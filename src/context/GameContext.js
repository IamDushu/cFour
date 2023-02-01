import { createContext, useState } from "react"

const INITIAL_STATE = [[], [], [], [], [], [], []]
// let player = "one"

export const GameContext = createContext(INITIAL_STATE)

export const GameContextProvider = ({ children }) => {
  const [column, setColumn] = useState(INITIAL_STATE)
  const [player, setPlayer] = useState("one")

  const coinAdder = (col) => {
    if (player === "one") {
      setPlayer("two")
      setColumn((prev) => [...prev, prev[col].push(1)])
    } else if (player === "two") {
      setPlayer("one")
      setColumn((prev) => [...prev, prev[col].push(2)])
    }
  }

  return (
    <GameContext.Provider value={{ column, player, coinAdder }}>
      {children}
    </GameContext.Provider>
  )
}
