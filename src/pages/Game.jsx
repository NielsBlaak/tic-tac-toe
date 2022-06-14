import '../style/game.css';
import Board from '../components/Board';

function Game() {
  return (
		<div className="game">
			<div className="game-board">
				<Board />
			</div>
		</div>
	);
}

export default Game;
