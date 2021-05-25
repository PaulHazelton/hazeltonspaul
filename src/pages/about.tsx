import { Heading, ExtLink, Spacer } from '../common/components'

function About() {
	return (
		<>
		<div className='section' id='project-section'>
			<Heading text='About Me'/>
			<div className='info-box' id='project-box'>
				<div className='project-info'>
					<h2>Who Am I?🤔</h2>
					<p>
						My name is Paul Hazelton. I was born in Florida in 1999. Since then I've moved a lot, and I recently moved again to Illinois. I've always loved math, and a good puzzle never fails to get me interested. I started to love programming in high school when I took a programming course on a whim. My love for programming and video games has led me to my hobby of game design.
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
						I graduated Magna Cum Laude from Winthrop University in May of 2021. I earned two Bachelor of Science degrees in my 4 years there: one in <b>Computer Science</b>, and the other in <b>Mathmatics</b>. I chose to go for two degrees because I truly enjoy learning, and I enjoy a challenge.
					</p>
				</div>
				<div className='project-img-box'>
					<img src='images/winthrop.jpg' alt='Winthrop University' />
				</div>					
			</div>
			<div className='info-box'>
				<h2>What Am I Passionate About?👨‍💻🎮</h2>
				<p>
					I truly love programming, especially when the result is something visually interesting. Video games are especially fun to work on, It's very satisfying to see illustrations that I've created come to life in a game.
				</p>
				<p>
					As a game designer, my mission is to develop video games that are genuinely fun to play and interesting to look at, but accessable to people without access to expensive and powerful machines. To this day, I still can't afford to purchase or build a big beutiful gaming rig, so I simply can't play many computationally expensive games. Because of this, the games I play are less graphically intense one's like <ExtLink url='https://www.factorio.com/'>Factorio</ExtLink>, <ExtLink url='https://www.stardewvalley.net/'>Stardew Valley</ExtLink>, and <ExtLink url='https://www.minecraft.net/en-us'>Minecraft</ExtLink>. These are the types of games I love to play and design.
				</p>
				<p>
					As a web developer, my goal is to design sites that are simple, efficient, and accessible, yet nice to look at.
				</p>
			</div>
		</div>
		<Spacer amount='2rem' />
		</>
	);
}

export default About;