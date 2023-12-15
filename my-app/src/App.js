import { useState } from "react"
import "./style.css"
import Board from "./Board"

export default function Game() {
  const [currentMove, setCurrentMove] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill("."))
  const [history, setHistory] = useState([Array(9).fill("."),])
  const [status, setStatus] = useState("Tic-Tac-Toe game")
  const [isCanPlay, setIsCanPlay] = useState(true)
  const [isGameEnd, setIsGameEnd] = useState(false)


  function gameManager(i) {

    if (squares[i] === "." && isCanPlay && !isGameEnd) {
      let currentSquares = squares.slice()
      currentSquares[i] = (currentMove ? "X" : "O")
      setCurrentMove(!currentMove)
      setSquares(currentSquares)
      setHistory([...history, currentSquares])
      calculateWinner(currentSquares)
    }
  }

  function calculateWinner(currentSquares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let isAllSquaresFull = true
    lines.forEach((item) => {
      const [a, b, c] = item
      if (currentSquares[a] === currentSquares[b] && currentSquares[b] === currentSquares[c] && currentSquares[a] !== ".") {
        setIsGameEnd(true)
        setStatus("Player " + (currentMove ? "X" : "O") + ' is win')
      }
      else if (!(currentSquares[a] !== "." && currentSquares[b] !== "." && currentSquares[c] !== ".")) {
        isAllSquaresFull = false
      }
    })
    if (isAllSquaresFull){
      setStatus("Nobody win! The game end")
      setIsGameEnd(true)
    }


  }
  return (
    <div>
      <div className="game__info">{status}</div>
      <Board gameManager={gameManager} squares={squares} />
      <HistoryManager history={history} setSquares={setSquares} setIsCanPlay={setIsCanPlay} />
    </div>
  )
}

function HistoryManager({ history, setSquares, setIsCanPlay }) {
  /**
   * Переводит игру в режим оторванной головы, блокируя возможность ходить
   * и ренедеря прошлые состояния игры
   */
  const [maxMoveNum, setMaxMoveNum] = useState(history.length - 1)
  const [currentMove, setCurrentMove] = useState(history.length - 1)
  if (maxMoveNum < history.length - 1) {
    setMaxMoveNum(history.length - 1)
    setCurrentMove(history.length - 1)
  }
  let prevMove = currentMove
  function forward() {
    if (0 <= currentMove + 1 && currentMove + 1 <= history.length - 1) {
      prevMove = currentMove + 1
      setCurrentMove(currentMove + 1)
      if (prevMove === history.length - 1) {
        setIsCanPlay(true)
      }
    }
    setSquares(history[prevMove])

  }
  function back() {
    if (0 <= currentMove - 1 && currentMove - 1 <= history.length - 1) {
      prevMove = currentMove - 1
      setCurrentMove(currentMove - 1)
      setIsCanPlay(false)
    }
    setSquares(history[prevMove])
  }

  return (
    <div className="History">
      <button onClick={forward} className="History__Forward History__Button">
        forward
      </button>
      <button onClick={back} className="History__Back History__Button">
        back
      </button>
    </div>
  )
}