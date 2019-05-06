import * as ActionType from '../actions';
import { StoreState } from '../models';

export const requestPlace = () => ({
	type: ActionType.REQUEST_PLACE
});

export const receivePlace = (placeObj: any) => ({
	type: ActionType.RECEIVE_PLACE,
	data: placeObj.data.place
});

export const fetchPlaceDetails = async (city: string, places: Array<any>, dispatch: any) => {
	const placeId = places.reverse().find(place => place.name.toLowerCase() === city.toLowerCase()).id;
	const headers = new Headers();
	headers.append('x-api-key', 'ybJnUA6NAl8xkhOlRPps1miAVjBsN4S5TT1tLN45');
	const response = await fetch(`https://api.sygictravelapi.com/1.0/en/places/${placeId}`, {
		method: 'GET',
		headers: headers
	});
	const json = await response.json();
	return dispatch(receivePlace(json));
};

export const fetchPlace = (position: StoreState) => {
	return async (dispatch: any) => {
		dispatch(requestPlace());

		const headers = new Headers();
		headers.append('x-api-key', 'ybJnUA6NAl8xkhOlRPps1miAVjBsN4S5TT1tLN45');
		const response = await fetch(
			`https://api.sygictravelapi.com/1.0/en/places/list?location=${position.data.latitude},${
				position.data.longitude
			}&query=${encodeURIComponent(position.data.city.toLowerCase())}&limit=5`,
			{
				method: 'GET',
				headers: headers
			}
		);
		const json = await response.json();
		return fetchPlaceDetails(position.data.city, json.data.places, dispatch);
	};
};
