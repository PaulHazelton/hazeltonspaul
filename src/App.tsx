import { useState } from 'react';
import { NavBar } from './common/components';
import './App.css';
import Home from './home/home';
import { PopData } from './common/interfaces';
import PopUp from './common/popups';
import { Switch, Route, HashRouter } from 'react-router-dom';
import About from './about/about';
import Contact from './contact/contact';
import NotFound from './pages/NotFound';

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
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	function createPopUp(data: PopData) {
		setPopData(data);
		setShowPopUp(true);
	}

	return (
		<HashRouter>
		<div id='App'>
			<NavBar />
			<div id='center-pane1'>
			<div id='center-pane2'>
				<Switch>
					<Route exact path='/' render={
						() => <Home />
					} />
					<Route path='/about' render={
						() => <About />
					} />
					<Route path='/contact' render={
						() => <Contact />
					} />
					<Route>
						<NotFound />
					</Route>
				</Switch>
			</div>
			</div>
			{
				// Show popup if showPopUp is true, nothing otherwise
				showPopUp ? <PopUp setShowPopUp={setShowPopUp} data={popData} /> : null
			}
		</div>
		</HashRouter>
	);
}

export default App;
