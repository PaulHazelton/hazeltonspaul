import { PopProps, PopButtonProps } from './interfaces'

/** This component is a generic pop up
 * @param props The data that describes the pop up along with app's setShowPopUp function
 */
 function PopUp(props: PopProps) {

	// The basic close function. This is called when the x is clicked
	const close = () => {
		props.setShowPopUp(false);
	}

	// Display the popUp (this should only be called by app so it's on top of everything)
	return (
		<div className='popUpOverlay'>
			<div className='popUpBox'>
				{
					props.data.close?
					<button id='close' onClick={close}><span id='x'>&times;</span></button> :
					<div className='popup-spacer'></div>
				}
				<div className='pop-content'>
					<p className='popMessage'>{props.data.message}</p>
					<div id='pop-button-holder'>
						{props.data.buttons.map(
							(schema, index) => <PopButton key={index} setShowPopUp={props.setShowPopUp} schema={schema} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

/** This component is the generic button that appears on a pop up.
 * @param props The button description, and the setShowPopUp so we can close the pop up.
 */
 function PopButton(props: PopButtonProps) {
	// const history = useHistory();
	
	// Does the correct action depending on the button schema
	const handleClick = () => {
		switch (props.schema.actionType) {
			case 'route': {
				if (props.schema.route) {
					// history.push(props.schema.route);
				}
				else
					console.log('route pop up button with no route specified');				
				break;
			}
			case 'back': {
				// history.goBack();
				break;
			}
			case 'custom': {
				if (props.schema.action)
					props.schema.action(props.schema.actionArgs);
				else
					console.log('Custom pop up button with no action specified');
				break;
			}
			case 'none': {
				break;
			}
		}
		props.setShowPopUp(false);
	}
	
	// Display the button
	return(
		<button className='pop-button' onClick={handleClick}>{props.schema.label}</button>
	)
}

export default PopUp;
