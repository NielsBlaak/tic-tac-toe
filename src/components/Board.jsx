import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import Player from './Player';

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [open, setOpen] = useState(false);
    const [winsX, setWinsX] = useState(0);
    const [winsO, setWinsO] = useState(0);
    const [ties, setTies] = useState(0);

    function calculateWinner(squares) {
		const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null
    }

    function calculatePreviousValue(squares) {
		return squares.filter(Boolean).length % 2 !== 0 ? 'X' : 'O';
    }

  	function calculateNextValue(squares) {
        return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O';
    }
  
    const nextValue = calculateNextValue(squares);
    const winner = calculateWinner(squares);
  
    function selectSquare(square) {
        if (winner || squares[square]) {
            return;
        }
        const squaresCopy = [...squares]
        squaresCopy[square] = nextValue
        setSquares(squaresCopy)
    }
  
    function restart() {
        setSquares(Array(9).fill(null));
        setOpen(false);
    }
  
    function renderSquare(i) {
        return (
            <button className="square" onClick={() => selectSquare(i)}>
                {squares[i]}
            </button>
        )
    }

    useEffect(() => {
        if (winner === 'X') {
            setWinsX(winsX + 1);
            setOpen(true);
        } 
        if (winner === 'O') {
            setOpen(true);
            setWinsO(winsO + 1);
        }
        if (squares.every(Boolean)) {
            setTies(ties + 1);
            setOpen(true);
        }
    }, [winner, squares])

    return (
        <>
            <Player active={nextValue === 'O'} rotate={true} nextValue={nextValue} winsX={winsX} winsO={winsO} ties={ties} />
            <div className="board">
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
            <Player active={nextValue === 'X'} rotate={false} nextValue={nextValue} winsX={winsX} winsO={winsO} ties={ties} />
            <Modal winner={winner} open={open} restart={restart} />
        </>
    );
};

export default Board;