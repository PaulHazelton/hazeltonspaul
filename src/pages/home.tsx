import { ExtLink, Heading, Spacer } from '../common/components';

function Home() {
	return (
		<>
			<div className='section'>
				<Welcome />
			</div>
			<div className='section' id='project-section'>
				<Heading text='My Projects'/>
				<ProjectList />
			</div>
			<div className='section'>
				<Heading text='Other Places You Can Find Me' />
				<ConnectList />
			</div>
			<Spacer amount='4rem' />
		</>
	);
}

function Welcome() {
	return (
		<>
		<Spacer amount='2rem' />
		<div id='welcome-box'>
			What's up? 👋 My name is Paul Hazelton and I'm a web developer, programmer, and game designer!
		</div>
		{/* <Spacer amount='30vh' /> */}
		</>
	);
}

function ConnectList() {
	return (
		<div className='section'>
			{/* <h2>Other Places You Can Find Me</h2> */}
			<div id='connection-list'>
				<Connection
					url={'https://github.com/PaulHazelton'}
					imgPath={'images/github-light-120.png'}
					alt={'github'}
					label={'GitHub'}
				/>
				<Connection
					url={'https://www.linkedin.com/in/paul-hazelton/'}
					imgPath={'images/linked-in-circle.png'}
					alt={'LinkedIn'}
					label={'LinkedIn'}
				/>
				<Connection
					url={'https://openprocessing.org/user/103154?view=sketches'}
					imgPath={'images/openprocessing-logo.png'}
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
			<ExtLink url={props.url} className='connection-link'>
				<img className='connection-pic' src={props.imgPath} alt={props.alt} />
			</ExtLink>
			<h3 className='connection-label'>{props.label}</h3>
		</div>
	);
}

function ProjectList() {
	return (
		<>
			<div className='info-box' id='project-box'>
				<div className='project-info'>
					<h2><a href='/#/devlogs/recoil' className="ext-link">Recoil</a></h2>
					<p>
						Recoil is a 2D platformer where your character can only move by using the recoil of their gun.
					</p>
					<div className="yellow-info">
						<p>
							How to run:
						</p>
						<ol>
							<li>Extract the .zip file</li>
							<li>Locate and run "Recoil.Main.exe"</li>
						</ol>
					</div>
					<a className='ext-link-button' href='/#/devlogs/recoil'><span>Dev Logs</span></a>
					<a className='ext-link-button' href='/Recoil-windows.zip' style={{marginTop: '1rem'}}><span>Download For Windows</span></a>
					<a className='ext-link-button' href='/Recoil-linux.zip' style={{marginTop: '1rem'}}><span>Download For Linux</span></a>
				</div>
				<div className='project-img-box'>
					<img src='images/Recoil-3.png' alt='Pixel art tank with 4 barrels on black background shooting down' />
				</div>
			</div>
			<div className='info-box' id='project-box'>
				<div className='project-info'>
					<h2>Responsive GUI for MonoGame</h2>
					<p>
						<ExtLink url='https://www.monogame.net/'>MonoGame</ExtLink> is the framework I use to make games. I decided I wanted to use an html/css style of creating menus for my games, so I made this!
						It allows for (arguably) most css style functionality including flexbox, gap, padding, margin, colors, borders, word wrap, scrolling, transitions and animations.
						Some Non-css functionality is also included like nine-slice.
						It works with both mouse input and gamepad input, you can use the arrow keys to change focus and scroll automatically without setting up anything like tab-index.
					</p>
					<ExtLink url='https://github.com/PaulHazelton/MG.ResponsiveGUI' className='ext-link-button'>
						<span>View On GitHub</span>
					</ExtLink>
				</div>
				<div className='project-img-box'>
					<img src='images/ResponsiveGui.png' alt='Simple menu screen with 6 buttons.' />
				</div>
			</div>

			<div className='info-box' id='project-box'>
				<div className='project-info'>
					<h2>This Site!</h2>
					<p>
						This site is a TypeScript React app.<br />
						When I made this site, React was the only web framework I knew, so I decided to make my portfolio with it.
						Since then I've now learned Blazor, and I strongly prefer Blazor over React, so eventually I will be moving this website over to Blazor.
					</p>
				</div>
				<div className='project-img-box'>
					<img src='images/BlazorLogo.png' alt='Blazor Logo. Purple blob with @ symbol.' />
				</div>
			</div>
			
			{/* <div className='info-box' id='project-box'>
				<div className='project-info'>
					<h2>All Things Auctionable</h2>
					<p>
						Auction software for the non-profit organization <ExtLink url='https://www.allthingspossible.org/'>All Things Possible</ExtLink>. This was a Winthrop University team project, but now it is being finished and maintained by myself and my friend Michael Hazell.

						You can view the site in action on the development server at <ExtLink url='https://allthingsauctionable.ml'>allthingsauctionable.ml</ExtLink>
					</p>
					<ExtLink url='https://allthingsauctionable.ml' className='ext-link-button'>
						<span>View Site</span>
					</ExtLink>
				</div>
				<div className='project-img-box'>
					<img src='images/ata-screenshot.png' alt='TODO' />
				</div>
			</div> */}
		</>
	);
}

export default Home;