import * as ActionType from '../actions';
import { Action } from '../models';

export const position = (state = {}, action: Action): any => {
	switch (action.type) {
		case ActionType.REQUEST_CURRENT_POSITION:
			return {
				...state,
				isFetching: true
			};
		case ActionType.RECEIVE_CURRENT_POSITION:
			return {
				...state,
				isFetching: false,
				data: action.data
			};
		default:
			return state;
	}
};
