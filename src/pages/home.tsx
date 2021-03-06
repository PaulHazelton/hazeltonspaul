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
						Recoil is a 2D platformer where your character can move only by the recoil of their gun.
					</p>
					<a className='ext-link-button' href='/#/devlogs/recoil'><span>Dev Logs</span></a>
					<a className='ext-link-button' href='/Recoil-Alpha.zip' style={{marginTop: '1rem'}}><span>Download For Windows</span></a>
					<a className='ext-link-button' href='/Recoil-Linux-Alpha.zip' style={{marginTop: '1rem'}}><span>Download For Linux</span></a>
				</div>
				<div className='project-img-box'>
					<img src='images/Recoil-2.png' alt='Tank on black background shooting in 2 directions' />
				</div>
			</div>
			<div className='info-box' id='project-box'>
				<div className='project-info'>
					<h2>This Site!</h2>
					<p>
						This site is currently under construction!<br></br>
						This very site is a TypeScript React app. I really like working with React, so I decided to make my portfolio with it.
					</p>
				</div>
				<div className='project-img-box'>
					<img src='images/construction.png' alt='TODO' />
				</div>
			</div>
			<div className='info-box' id='project-box'>
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
			</div>
		</>
	);
}

export default Home;