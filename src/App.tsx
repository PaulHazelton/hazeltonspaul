import React from 'react';
import { NavBar } from './common/components';
import './App.css';
import Home from './home/home';

function App() {
	return (
		<div id='App'>
			<NavBar />
			<div id='center-pane1'>
			<div id='center-pane2'>
				<Home />
			</div>
			</div>
		</div>
	);
}

export default App;
