import * as ActionType from '../actions';

export const requestCurrentPosition = () => ({
	type: ActionType.REQUEST_CURRENT_POSITION
});

export const receiveCurrentPosition = (positionObj: any) => ({
	type: ActionType.RECEIVE_CURRENT_POSITION,
	data: positionObj
});

export const fetchCurrentPosition = () => {
	return async (dispatch: any) => {
		dispatch(requestCurrentPosition());

		const response = await fetch('http://api.ipstack.com/check?access_key=6dba4684020619f41f1e4789aee47265', {
			method: 'GET'
		});
		const json = await response.json();
		return dispatch(receiveCurrentPosition(json));
	};
};
