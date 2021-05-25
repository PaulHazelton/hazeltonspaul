import { Heading, ExtLink } from "../common/components";

function Resume () {
	return  (
		<>
			<div className='section' id='welcome-section'>
				<Heading text='My Resume' />
				<ExtLink url='https://raw.githubusercontent.com/PaulHazelton/hazeltonspaul/master/public/Paul-Hazelton-Resume.pdf'>Download from github</ExtLink>
			</div>
			<div className='section'>
				<div id='welcome-box'>
					This page is currently under construction.
				</div>
				<div className='img-box'>
					<img className='big-img' src='images/construction.png' alt='construction img'/>
				</div>
			</div>
		</>
	);
}

export default Resume;