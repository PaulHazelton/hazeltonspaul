import React from 'react';
import './App.css';

function App() {
	return (
		<div id='App'>
			<NavBar />
			<div id='center-pane1'>
				<div id='center-pane2'>
					<h1>What's up!?</h1><hr></hr>
					<Welcome />
					<ConnectList />
					<h1>My Projects</h1><hr></hr>
					<ProjectList />
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
		<div className='info-box'>
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
		<div className='info-box'>
			<h2>Other Places You Can Find Me</h2>
			<div id='connection-list'>
				<Connection
					url={'https://github.com/PaulHazelton'}
					imgPath={'/images/github-light-120.png'}
					alt={'github'}
					label={'GitHub'}
				/>
				<Connection
					url={'https://www.linkedin.com/in/paul-hazelton/'}
					imgPath={'/images/linked-in-circle.png'}
					alt={'LinkedIn'}
					label={'LinkedIn'}
				/>
				<Connection
					url={'https://openprocessing.org/user/103154?view=sketches'}
					imgPath={'/images/openprocessing-logo.png'}
					alt={'Open Processing'}
					label={'Open Processing'}
				/>
			</div>
		</div>
	);
}

interface ConnectionProps {
	url: string,
	imgPath: string,
	alt: string,
	label: string,
}
function Connection(props: ConnectionProps) {
	return (
		<div className='connection'>
			<ExtLink url={props.url}>
				<img className='connection-pic' src={props.imgPath} alt={props.alt} />
			</ExtLink>
			<h3 className='connection-label'>{props.label}</h3>
		</div>
	);
}

function ProjectList() {
	return (
		<div className='info-box' id='project-box'>
			<div className='project-info'>
				<h2>All Things Auctionable</h2>
				<p>
					Auction software for the non-profit organization <ExtLink url='https://www.allthingspossible.org/'>All Things Possible</ExtLink>. This was a Winthrop University team project, but now it is being finished and maintained by myself and my friend Michael Hazell.

					You can view the site in action on the development server at <ExtLink url='https://allthingsauctionable.ml'>allthingsauctionable.ml</ExtLink>
				</p>
				<button className='button'><span>View on GitHub</span></button>
			</div>
			<div className='project-img' style={{backgroundImage: 'url(images/ata-screenshot.png)'}} />
		</div>
	);
}

function ExtLink(props: {url: string, children?: React.ReactNode}) {
	return (
		<a href={props.url} target='_blank' rel='noopener noreferrer'>{props.children}</a>
	);
}

export default App;
