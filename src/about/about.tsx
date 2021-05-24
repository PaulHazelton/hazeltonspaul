import { Heading } from '../common/components'

function About() {
	return (
		<>
		<div className='section'>
			<Heading text='About Me'/>
			<div className='info-box' id='project-box'>
				<div className='project-info'>
					<h2>Who Am I?</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, vel quasi nostrum odit voluptatem deserunt quia aut distinctio molestiae tempora natus iusto beatae, officia reprehenderit illo? Reprehenderit deserunt numquam ipsa!
					</p>
					<h2>My Education</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam ducimus quis modi maxime doloremque ex consequatur fugiat esse tempore eos sequi, expedita velit excepturi, perspiciatis maiores vero totam voluptatibus. Laborum.
					</p>
					<h2>What Am I Passionate About?</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam ducimus quis modi maxime doloremque ex consequatur fugiat esse tempore eos sequi, expedita velit excepturi, perspiciatis maiores vero totam voluptatibus. Laborum.
					</p>
				</div>
				<div className='project-img-box'>
					<img src='images/HeadShot.JPG' alt='TODO' />
				</div>
			</div>
		</div>
		<div className='section'>
			<div id='welcome-box'>
				This page is currently under construction.
			</div>
			<div className='img-box'>
				<img src='images/construction.png' alt='construction' className='big-img' />
			</div>
		</div>
		<br></br>
		<br></br>
		</>
	);
}

export default About;