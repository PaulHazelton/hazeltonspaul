import { Heading } from "../common/components";

function Resume () {

	// const getData = (url: string) => new Promise((resolve, reject) => {
	// 	setTimeout(() => {
	// 		fetch(url)
	// 			.then(response => response.text())
	// 			.then(data => {
	// 				resolve(data)
	// 			});
	// 	});
	// });

	return  (
		<>
			<div className='section' id='welcome-section'>
				<Heading text='My Resume' />
				{/* <DownloadLink
					label='Download'
					filename='Paul-Hazelton-Resume.pdf'
					exportFile={() => Promise.resolve(getData('Paul-Hazelton-Resume.pdf'))}
				/> */}
				{/* <a href=''>Download from github</a> */}
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