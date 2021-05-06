import React from 'react';
import './App.css';

function App() {
	return (
		<div id='App'>
			<NavBar />
			<div id='center-pane'>
				<div>
					This site is under construction!
				</div>
			</div>
		</div>
	);
}

function NavBar() {
	return (
		<header>
			<img className='logo' src='/face.svg' alt='logo' />
			<nav>
				<ul id='nav-link-list'>
					<li>About Me</li>
					<li>Contact Me</li>
				</ul>
			</nav>
		</header>
	);
}

export default App;
