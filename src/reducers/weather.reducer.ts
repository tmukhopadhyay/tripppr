import * as ActionType from '../actions';
import { Action } from '../models';

export const weather = (state = {}, action: Action): any => {
	switch (action.type) {
		case ActionType.REQUEST_WEATHER:
			return {
				...state,
				isFetching: true
			};
		case ActionType.RECEIVE_WEATHER:
			return {
				...state,
				isFetching: false,
				data: action.data
			};
		default:
			return state;
	}
};
