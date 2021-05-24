import { Heading, ExtLink } from '../common/components'

function About() {
	return (
		<>
		<div className='section'>
			<Heading text='About Me'/>
			<div className='info-box' id='project-box'>
				<div className='project-info'>
					<h2>Who Am I?🤔</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, vel quasi nostrum odit voluptatem deserunt quia aut distinctio molestiae tempora natus iusto beatae, officia reprehenderit illo? Reprehenderit deserunt numquam ipsa!
					</p>
				</div>
				<div className='project-img-box'>
					<img src='images/HeadShot-crop.JPG' alt='My professional headshot' />
				</div>
			</div>
			<div className='info-box' id='project-box'>
				<div className='project-info'>
					<h2>My Education🎓🎓</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam ducimus quis modi maxime doloremque ex consequatur fugiat esse tempore eos sequi, expedita velit excepturi, perspiciatis maiores vero totam voluptatibus. Laborum.
					</p>
				</div>
				<div className='project-img-box'>
					<img src='images/winthrop.jpg' alt='Winthrop University' />
				</div>					
			</div>
			<div className='info-box'>
				<h2>What Am I Passionate About?🎮</h2>
				<p>
					I truly love programming, especially when the result is something visually interesting. Video games are especially fun to work on, It's very satisfying to see illustrations that I've created come to life in a game.
				</p>
				<p>
					As a game designer, my mission is to develop video games that are genuinely fun to play and interesting to look at, but accessable to people without access to expensive and powerful machines. To this day, I still can't afford to purchase or build a big beutiful gaming rig, and so I simply can't play many of the games I want to, so of course the games I like to play less graphically intense one's like <ExtLink url='https://www.factorio.com/'>Factorio</ExtLink>, <ExtLink url='https://www.stardewvalley.net/'>Stardew Valley</ExtLink>, and <ExtLink url='https://www.minecraft.net/en-us'>Minecraft</ExtLink>.
				</p>
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