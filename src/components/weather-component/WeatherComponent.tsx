import React, { Component } from 'react';
import './WeatherComponent.scss';
import { Weather } from '../../models';

interface IProps {
	row: string;
	column: string;
	theme: string;
	weatherList: Array<Weather>;
}

class WeatherComponent extends Component<IProps, any> {
	private readonly days: Array<string> = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

	private getWeatherCard(weather: Weather, index: number): JSX.Element {
		if (index === 0) {
			return (
				<section key={index} className={`card-wrapper row-2 ${this.props.column}`}>
					<section className={`card theme-${this.props.theme}`}>
						<figure>
							<i className={`${weather.icon} fa-6x`} />
						</figure>
						<figcaption>
							<h4 className='headline big'>{weather.temperature}&deg;C</h4>
							<p className='caption big'>{weather.description}</p>
							<span className='caption big'>{weather.max}&deg;C</span> /{' '}
							<span className='caption big'>{weather.min}&deg;C</span>
						</figcaption>
					</section>
				</section>
			);
		} else {
			return (
				<section key={index} className={`card-wrapper row-1 col-2`}>
					<section className={`card theme-${this.props.theme}`}>
						<figure>
							<i className={`${weather.icon} fa-2x`} />
						</figure>
						<figcaption>
							<h4 className='headline'>{weather.temperature}&deg;C</h4>
							<p className='caption'>{this.days[weather.date.getDay()]}</p>
						</figcaption>
					</section>
				</section>
			);
		}
	}

	render() {
		return (
			<section className={`weather-component sub-grid ${this.props.row} ${this.props.column}`}>
				{this.props.weatherList.map((weather: Weather, index: number) => this.getWeatherCard(weather, index))}
			</section>
		);
	}
}

export default WeatherComponent;
