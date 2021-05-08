import React from 'react';
import './App.css';

function App() {
	return (
		<div id='App'>
			<NavBar />
			<div id='center-pane1'>
				<div id='center-pane2'>
					<Welcome />
					<ConnectList />
				</div>
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
			<h2>Who am I?</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim totam commodi adipisci temporibus illo quo cupiditate. Esse, perferendis explicabo sunt, officiis quia a temporibus facilis molestiae dolorem obcaecati mollitia ea.
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident molestiae quo distinctio sint nemo aliquid quod, nulla officia dolores dolorem sunt? Molestiae quos iusto in cum facilis, a optio soluta.
			</p>
		</div>
	);
}

function ConnectList() {
	return (
		<div id='connection-box'>
			<h2>Other Places You Can Find Me</h2>
			<div id='connection-list'>
				<Connection
					link={'https://github.com/PaulHazelton'}
					imgPath={'/images/github-light-120.png'}
					alt={'github'}
					label={'GitHub'}
				/>
				<Connection
					link={'https://www.linkedin.com/in/paul-hazelton/'}
					imgPath={'/images/linked-in-circle.png'}
					alt={'LinkedIn'}
					label={'LinkedIn'}
				/>
				<Connection
					link={'https://openprocessing.org/user/103154?view=sketches'}
					imgPath={'/images/openprocessing-logo.png'}
					alt={'Open Processing'}
					label={'Open Processing'}
				/>
			</div>
		</div>
	);
}

interface ConnectionProps {
	link: string,
	imgPath: string,
	alt: string,
	label: string,
}
function Connection(props: ConnectionProps) {
	return (
		<div className='connection'>
			<a href={props.link} target='_blank' rel='noopener noreferrer'>
				<img className='connection-pic' src={props.imgPath} alt={props.alt} />
			</a>
			<h3 className='connection-label'>{props.label}</h3>
		</div>
	);
}

export default App;
