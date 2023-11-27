import { useState } from "react"
import "./style.css"

export default function Game(){
  return (
    <div>
      <App />
    </div>
  )
}

function App() {
  const [squares, setSquares] = useState(Array(9).fill("."))
  const [currentMove, setCurrentMove] = useState(true)
  const [winner, setWinner] = useState("Tic-Tac-Toe game")
  const [isCanPlay, setIsCanPlay] = useState(true)

  function handleGame(i) {
    if (squares[i] === "." && isCanPlay) {
      let temp_squares = squares.slice()
      if (currentMove) {
        temp_squares[i] = "X"
        setCurrentMove(false)
      }
      else {
        temp_squares[i] = "O"
        setCurrentMove(true)
      }

      setSquares(temp_squares)
      calculateWinner(temp_squares)
    }

  }
  return (
    <>
      <div className="game__info">{winner}</div>
      <div className="game__field">
          <Square value={squares[0]} onClick={() => handleGame(0)} />
          <Square value={squares[1]} onClick={() => handleGame(1)} />
          <Square value={squares[2]} onClick={() => handleGame(2)} />
          <Square value={squares[3]} onClick={() => handleGame(3)} />
          <Square value={squares[4]} onClick={() => handleGame(4)} />
          <Square value={squares[5]} onClick={() => handleGame(5)} />
          <Square value={squares[6]} onClick={() => handleGame(6)} />
          <Square value={squares[7]} onClick={() => handleGame(7)} />
          <Square value={squares[8]} onClick={() => handleGame(8)} />
      </div>
    </>
  )
  function calculateWinner(temp_squares) {
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
      const [a, b, c] = item;
      // eslint-disable-next-line
      if ((temp_squares[a] && temp_squares[a] === temp_squares[b] && temp_squares[a] === temp_squares[c]) && (temp_squares[a] != ".")) {
        setWinner(`Player ${temp_squares[a]} is winner`)
        setIsCanPlay(false)
      }
      else if (!(temp_squares[a] !== "." && temp_squares[b] !== "." && temp_squares[c] !== ".")){
        isAllSquaresFull = false
      }
    })

    if (isAllSquaresFull){
      setWinner("Nobody win! The game end")
      setIsCanPlay(false)
    }
  }
}

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>{value} </button>
  )
}

