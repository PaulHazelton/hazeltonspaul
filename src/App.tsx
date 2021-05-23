import React, { useState } from 'react';
import { NavBar } from './common/components';
import './App.css';
import Home from './home/home';
import { PopData } from './common/interfaces';
import PopUp from './common/popups';

function App() {

	const [popData, setPopData] = useState<PopData>({
		message: 'Empty Pop Up! Someone messed up',	// This should never be seen
		buttons: [
			{
				label: 'Oops!',
				actionType: 'none',
			}
		], // Empty array of buttons
	});
	const [showPopUp, setShowPopUp] = useState<boolean>(false);

	// Creates a pop up. This replaces setPopData and setShowPopUp
	function createPopUp(data: PopData) {
		setPopData(data);
		setShowPopUp(true);
	}

	return (
		<div id='App'>
			<NavBar />
			<div id='center-pane1'>
			<div id='center-pane2'>
				<Home />
			</div>
			</div>
			{
				// Show popup if showPopUp is true, nothing otherwise
				showPopUp ? <PopUp setShowPopUp={setShowPopUp} data={popData} /> : null
			}
		</div>
	);
}

export default App;
