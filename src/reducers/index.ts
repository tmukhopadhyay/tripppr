import { combineReducers } from 'redux';
import { place } from './place.reducer';
import { position } from './position.reducer';
import { weather } from './weather.reducer';

export default combineReducers({
	place,
	position,
	weather
});
