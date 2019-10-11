import * as ActionType from '../actions';

export const requestWeather = () => ({
	type: ActionType.REQUEST_WEATHER
});

export const receiveWeather = (weatherObj: any) => ({
	type: ActionType.RECEIVE_WEATHER,
	data: weatherObj
});

export const fetchWeather = (lat: number, lon: number) => {
	return async (dispatch: any) => {
		dispatch(requestWeather());

		const response = await fetch(
			`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=acb50117760a0d6e2547c9e1e3184998`,
			{
				method: 'GET'
			}
		);
		const json = await response.json();
		return dispatch(receiveWeather(json));
	};
};
