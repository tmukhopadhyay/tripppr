import React, { Component } from 'react';
import './HomePage.scss';
import { CarouselContainer, ContactContainer, FeedContainer, MapContainer, SearchContainer, SummaryContainer, VideoContainer, WeatherContainer } from '../../containers';

class HomePage extends Component<any, any> {
	render() {
		return (
			<section className='grid app-wrapper'>
				<SearchContainer row='row-1' column='col-12' />
				<VideoContainer row='row-1' column='col-8' />
				<SummaryContainer row='row-1' column='col-4' theme='cyan' />
				<MapContainer row='row-1' column='col-4' />
				<WeatherContainer row='row-1' column='col-8' theme='dark-blue' />
				<CarouselContainer row='row-1' column='col-12' />
				<FeedContainer
					row='row-2'
					column='col-4'
					level='island|region|poi'
					theme='dark-blue'
					title='Point Of Interests'
					entries={3}
					seeMoreLink='#'
				/>
				<FeedContainer
					row='row-2'
					column='col-4'
					level='city'
					theme='blue'
					title='Nearby Areas'
					entries={3}
					seeMoreLink='#'
				/>
				<ContactContainer row='row-2' column='col-4' />
			</section>
		);
	}
}

export default HomePage;
