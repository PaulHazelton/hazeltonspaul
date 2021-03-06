import { useState } from 'react';
import { NavBar, Footer } from './common/components';
import './App.css';
import Home from './pages/home';
import { PopData } from './common/interfaces';
import PopUp from './common/popups';
import { Switch, Route, HashRouter } from 'react-router-dom';
import About from './pages/about';
import Resume from './pages/resume';
import NotFound from './pages/NotFound';
import DevLogs from './pages/DevLogs';
import DevLogsRecoil from './pages/DevLogsRecoil';

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
					<Route path='/resume' render={
						() => <Resume />
					} />
					<Route exact path='/devlogs' render={
						() => <DevLogs />
					} />
					<Route exact path='/devlogs/recoil' render={
						() => <DevLogsRecoil />
					} />
					<Route>
						<NotFound />
					</Route>
				</Switch>
				<Footer />
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
