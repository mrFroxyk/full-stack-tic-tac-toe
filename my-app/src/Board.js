import "./style.css"


export default function Board({gameManager, squares}) {

    return (
      <>
        <div className="game__field">
            <Square value={squares[0]} onClick={() => gameManager(0)} />
            <Square value={squares[1]} onClick={() => gameManager(1)} />
            <Square value={squares[2]} onClick={() => gameManager(2)} />
            <Square value={squares[3]} onClick={() => gameManager(3)} />
            <Square value={squares[4]} onClick={() => gameManager(4)} />
            <Square value={squares[5]} onClick={() => gameManager(5)} />
            <Square value={squares[6]} onClick={() => gameManager(6)} />
            <Square value={squares[7]} onClick={() => gameManager(7)} />
            <Square value={squares[8]} onClick={() => gameManager(8)} />
        </div>
      </>
    )
  }
  
  function Square({ value, onClick }) {
    return (
      <button className="square" onClick={onClick}>{value} </button>
    )
  }