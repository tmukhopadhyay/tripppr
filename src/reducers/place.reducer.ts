import * as ActionType from '../actions';
import { Action } from '../models';

export const place = (state = {}, action: Action): any => {
	switch (action.type) {
		case ActionType.REQUEST_PLACE:
			return {
				...state,
				isFetching: true
			};
		case ActionType.RECEIVE_PLACE:
			return {
				...state,
				isFetching: false,
				data: action.data
			};
		default:
			return state;
	}
};
