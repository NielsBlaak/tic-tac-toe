import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Start from './pages/Start';
import Game from './pages/Game';
import { initialize } from './admob';

const App = () => {
	initialize();

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Start />} />
				<Route path="/game" element={<Game />} />
			</Routes>
		</Router>
	)
}

export default App;
