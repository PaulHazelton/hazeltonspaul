import { Heading } from "../common/components";

function DevLogs() {
	return (
		<>
			<div className='section' id='project-section'>
				<Heading text='Development Logs'/>
				<div className='info-box' id='project-box'>
					<div className='project-info'>
						<h2><a href='/#/devlogs/recoil' className="ext-link">Recoil</a></h2>
						<p>
							Recoil is a 2D platformer where your character can move only by the recoil of their gun.
						</p>
					</div>
					<div className='project-img-box'>
						<img src='images/Recoil-2.png' alt='Hammer and wrench' />
					</div>
				</div>
			</div>
		</>
	);
}

export default DevLogs;