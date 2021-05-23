// Pop up related interfaces
export interface PopProps {
	setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>,
	data: PopData,
}
export interface PopData {
	message: string,
	buttons: PopButtonSchema[],
	close?: boolean,
}
export interface PopButtonProps {
	setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>,
	schema: PopButtonSchema,
}
export interface PopButtonSchema {
	label: string,
	actionType: 'none' | 'route' | 'back' | 'custom',
	route?: string,
	action?: (args?: any) => void,
	actionArgs?: any,
}