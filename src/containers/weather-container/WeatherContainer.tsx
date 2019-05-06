import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../../actions';
import { WeatherComponent } from '../../components';
import { WeatherDirector } from '../../directors';
import { Store, StoreState } from '../../models';
import { isEmpty } from '../../utilities';

interface IProps {
	row: string;
	column: string;
	theme: string;
	dispatch: Function;
	position: StoreState;
	weather: StoreState;
}

class WeatherContainer extends Component<IProps, any> {
	constructor(props: IProps) {
		super(props);
		if (props.position && props.position.data && props.position.data.latitude) {
			this.props.dispatch(fetchWeather(props.position.data.latitude, props.position.data.longitude));
		}
	}

	render() {
		if (!this.props.weather || isEmpty(this.props.weather) || this.props.weather.isFetching) {
			return <section />;
		} else {
			return (
				<WeatherComponent
					row={this.props.row}
					column={this.props.column}
					theme={this.props.theme}
					weatherList={this.props.weather.data.list
						.filter((weatherObj: any, index: number) => (index + 1) % 8 === 1)
						.map((weatherObj: any) => new WeatherDirector().construct(weatherObj))}
				/>
			);
		}
	}
}

export default connect((store: Store) => ({
	position: store.position,
	weather: store.weather
}))(WeatherContainer);
