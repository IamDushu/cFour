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
  const [isFill, setIsFill] = useState(0)

  const coinAdder = (col) => {
    if (column[col].length < 6) {
      console.log(isFill)
      if (player === "one") {
        setPlayer("two")
        setColumn((prev) => [...prev, prev[col].push(1)])
      } else if (player === "two") {
        setPlayer("one")
        setColumn((prev) => [...prev, prev[col].push(2)])
      }
    } else {
      setIsFill((prev) => prev + 1)
      console.log(isFill)
    }
  }

  useEffect(() => {
    console.log(column)
    checkVertically(column)
    checkHorizontally(column)
  }, [column])

  const checkVertically = (clm) => {
    clm.forEach((ele) => {
      if (ele.length > 3) {
        if (ele.join("").includes("1111")) {
          // console.log(ele.indexOf("1"))
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
    console.log(clm)
    console.log(player)
    console.log(num)
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

  return (
    <GameContext.Provider
      value={{
        column,
        player,
        oneWin,
        twoWin,
        oneWinCount,
        twoWinCount,
        isFill,
        setColumn,
        setOneWinCount,
        setTwoWinCount,
        setOneWin,
        setTwoWin,
        setPlayer,
        coinAdder,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

// useEffect(() => {
//   console.log(column, player)
//   if (player === "two") {
//     if (checkVertically(column, "1111")) {
//       setPlayerOneWin(true)
//     }
//   } else {
//     if (checkVertically(column, "2222")) {
//       setPlayerTwoWin(true)
//     }
//   }
// }, [column, player])

// const checkVertically = (clm, data) => {
//   clm.forEach((ele) => {
//     if (ele.length > 3) {
//       return ele.join("").includes(data)
//     }
//   })
// }

// // const checkHorizontally = (clm) => {
// //   console.log("checked Horizontally")
// // }

// // const checkDiagonal = (clm) => {
// //   console.log("checked Diagonally")
// // }
