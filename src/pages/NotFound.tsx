import { useHistory } from "react-router";
import { Spacer } from "../common/components";

function NotFound () {
	const history = useHistory();

	function goHome () {
		history.push('/');
	}

	return (
		<div className='section' id='welcome-section'>
			<Spacer amount='4rem' />
			<div className='large-box'>
				404<br></br>
				<Spacer />
				Uh oh, there's nothing here.
			</div>
			<Spacer amount='4rem' />
			<button onClick={goHome}>Go Back Home</button>
		</div>
	);
}

export default NotFound;