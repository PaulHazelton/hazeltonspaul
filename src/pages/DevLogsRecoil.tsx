import { ExtLink, Heading, Spacer } from "../common/components";

function DevLogsRecoil() {
	return (
		<>
			<div className='section' id='project-section'>
				<Heading text='Recoil Development Logs'/>
				<div className='info-box'>
					<h2>#1) Creating a Dev Log, and Changing Physics Engines</h2>
					<p>
						Howdy
						<br />
						I was inspired to make a dev log by the Factorio developers at Wube Software. I used to read <ExtLink url="https://www.factorio.com/blog/post/fff-1">Factorio Friday Facts</ExtLink> every Friday until they wrapped it up. I don't plan on posting these updates every week though. Unfortunately, I have to work full time at another job so I can't do game development as often as I'd like to. At my real job I use C# to do .Net web development, it's kind of fun honestly, but not what I really want to be doing with my life. For now, game design has to be my second job, not my first.
						<br /><br />
						I'm not much of a writer, so for those who are curious, here is a quick summary of the tools / setup I'm using to work on this project.
					</p>
					<table style={{ width : '100%', borderCollapse: "collapse" }}>
						<colgroup>
							<col style={{ width : '25%' }}/>
							<col style={{ width : '75%' }}/>
						</colgroup>
						<tr>
							<td>IDE</td>
							<td>VS Code	(and Visual Studio 2022 whenever I have to install a package :P )</td>
						</tr>
						<tr>
							<td>Language</td>
							<td>C#, .Net Core</td>
						</tr>
						<tr>
							<td>Framework</td>
							<td><ExtLink url="https://www.monogame.net/">MonoGame</ExtLink></td>
						</tr>
						<tr>
							<td>Physics Engine</td>
							<td><ExtLink url="https://github.com/tainicom/Aether.Physics2D">Aether.Physics2D</ExtLink></td>
						</tr>
					</table>
					<Spacer />
					<h3>Physics Engines, not Game Engines</h3>
					<p>
						I first started learning about programming in high school. After my first class, I couldn't wait to learn more so I started learning on my own during the summer. I decided to learn Java because Minecraft was made in Java. So, I started a project in Java to learn about object oriented programming. I started making a 2D physics oriented building game, without any game engine. I just wanted to do coding. I even started building my own physics engine! After realizing that was extremely difficult, I started using Box2D. Turns out it's used all over the place, notably it is the 2D physics engine for Unity. Unfortunately that project I started needs to be scrapped because it is horribly inefficient (made by a 16 year old). Looking back, I'm quite proud of it even though it has to be scrapped.
						<br /><br />
						Speaking of Unity, I don't really like it. I feel too far removed from the meat of it, it feels like I don't have full control over it. At my real job, we are constantly having issues with these huge third party systems (like our IDP) and I just hate the feeling of being boxed in and limited by a system like that. So I, perhaps to my detriment, am avoiding a game engine like Unity. I recently stumbled upon MonoGame and I absolutely love it! In the deep recesses of my mind I feel like I've used it before way back in Programming II in high school (Mrs T. you're still the best) but I can't really remember. I really want every game I make to be available to as many people as possible, and MonoGame seems to support cross platform stuff really well.
						<br /><br />
						<b>So what am I actually doing on Recoil right now?</b> Well when I started Recoil I found <ExtLink url='https://github.com/Genbox/VelcroPhysics'>VelcroPhysics</ExtLink>, which is basically Box2D for MonoGame, great! But... it's in pre-release, bummer. So I ignored this problem until recently when I found <ExtLink url="https://github.com/tainicom/Aether.Physics2D">Aether.Physics2D</ExtLink>, <i>another Box2D based physics engine for MonoGame</i>, but it is actually released!? AND HAS GOOD DOCUMENTATION!? So switching over from Velcro to Aether is what I'm up to currently.
					</p>
				</div>
			</div>
		</>
	);
}

export default DevLogsRecoil;