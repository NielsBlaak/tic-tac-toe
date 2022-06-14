import '../index.css';
import { Link } from 'react-router-dom'

function Start() {
  return (
		<div className="home">
            <div className="title">
                <h1>Tic Tac Toe</h1>
            </div>
            <div className="example">
                <p>Classic Tic Tac Toe 3 in a row wins</p>
                <p>Yellow background shows whose turn it is</p>
                <p>Have fun!</p>
            </div>
            <div className="button">
                <Link to="/game">Let's play!</Link>
            </div>
		</div>
	);
}

export default Start;
