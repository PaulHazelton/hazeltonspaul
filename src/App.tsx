import React from 'react';
import './App.css';

function App() {
	return (
		<div id='App'>
			<NavBar />
			<div id='center-pane'>
				<Welcome />
			</div>
		</div>
	);
}

function NavBar() {
	return (
		<header>
			<img className='logo' src='/logo.svg' alt='logo' />
			<nav>
				<ul id='nav-link-list'>
					<li>About Me</li>
					<li>Contact Me</li>
				</ul>
			</nav>
		</header>
	);
}

function Welcome() {
	return (
		<div id='welcome-box'>
			<h1>Who am I?</h1>
			<p>
				I'm your worst fuckin nightmare that's who. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus vero libero adipisci corrupti aperiam officiis itaque? Cumque consequatur aut asperiores, obcaecati ut, dolorum illum voluptatum, similique esse porro laborum totam?
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut fugiat eos, ea repellendus inventore quam tempora, voluptates illum accusamus repudiandae sequi dignissimos quod nisi ratione illo adipisci vel explicabo.
			</p>
		</div>
	);
}

export default App;
