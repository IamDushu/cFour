import { createContext, useEffect, useState } from "react"

const INITIAL_STATE = [[], [], [], [], [], [], []]

export const GameContext = createContext(INITIAL_STATE)

export const GameContextProvider = ({ children }) => {
  const [column, setColumn] = useState(INITIAL_STATE)
  const [player, setPlayer] = useState("one")
  const [oneWin, setOneWin] = useState(false)
  const [twoWin, setTwoWin] = useState(false)
  const [oneWinCount, setOneWinCount] = useState(0)
  const [twoWinCount, setTwoWinCount] = useState(0)
  const [isTie, setIsTie] = useState(false)
  const [seconds, setSeconds] = useState(30)
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const coinAdder = (col) => {
    if (column[col].length < 6) {
      if (player === "one") {
        setPlayer("two")
        setColumn((prev) => [...prev, prev[col].push(1)])
      } else if (player === "two") {
        setPlayer("one")
        setColumn((prev) => [...prev, prev[col].push(2)])
      }
    }
  }

  useEffect(() => {
    setSeconds(30)
    checkVertically(column)
    checkHorizontally(column)
    checkAntiDiagonal(column)
    checkDiagonal(column)
    checkDraw(column)
  }, [column])

  const checkVertically = (clm) => {
    clm.forEach((ele) => {
      if (ele.length > 3) {
        if (ele.join("").includes("1111")) {
          setOneWin(true)
          setOneWinCount((prev) => prev + 1)
        }
        if (ele.join("").includes("2222")) {
          setTwoWin(true)
          setTwoWinCount((prev) => prev + 1)
        }
        return
      }
    })
  }

  const checkHorizontally = (clm) => {
    const newArr = [[], [], [], [], [], []]
    const num = player === "one" ? "2222" : "1111"
    //i is the row // j is the column ||||
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        newArr[i] += clm[j][i]
      }
      let isHoriz = newArr[i].includes(num)
      if (isHoriz) {
        if (player === "one") {
          setTwoWin(true)
          setTwoWinCount((prev) => prev + 1)
        }
        if (player === "two") {
          setOneWin(true)
          setOneWinCount((prev) => prev + 1)
        }
      }
    }
  }

  const checkAntiDiagonal = (boards) => {
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 4; c++) {
        if (boards[r][c] !== " ") {
          if (
            boards[r][c] === boards[r + 1][c + 1] &&
            boards[r + 1][c + 1] === boards[r + 2][c + 2] &&
            boards[r + 2][c + 2] === boards[r + 3][c + 3]
          ) {
            if (boards[r][c] === 1) {
              setOneWin(true)
              setOneWinCount((prev) => prev + 1)
            }
            if (boards[r][c] === 2) {
              setTwoWin(true)
              setTwoWinCount((prev) => prev + 1)
            }
          }
        }
      }
    }
  }

  const checkDiagonal = (boards) => {
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (boards[r][c] !== " ") {
          if (
            boards[r][c] === boards[r - 1][c + 1] &&
            boards[r - 1][c + 1] === boards[r - 2][c + 2] &&
            boards[r - 2][c + 2] === boards[r - 3][c + 3]
          ) {
            if (boards[r][c] === 1) {
              setOneWin(true)
              setOneWinCount((prev) => prev + 1)
            }
            if (boards[r][c] === 2) {
              setTwoWin(true)
              setTwoWinCount((prev) => prev + 1)
            }
          }
        }
      }
    }
  }

  const checkDraw = (clm) => {
    if (clm.flat().length === 84) {
      setIsTie(true)
    }
  }

  return (
    <GameContext.Provider
      value={{
        column,
        player,
        oneWin,
        twoWin,
        oneWinCount,
        twoWinCount,
        isTie,
        seconds,
        isMenuOpen,
        setColumn,
        setOneWinCount,
        setTwoWinCount,
        setOneWin,
        setTwoWin,
        setPlayer,
        coinAdder,
        setIsTie,
        setSeconds,
        setIsMenuOpen,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
