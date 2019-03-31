import Carousel from 'nuka-carousel';
import React, { Component } from 'react';
import { CardComponent } from '../../components';
import { CarouselContainer, SearchContainer } from '../../containers';
import './HomePage.scss';

class HomePage extends Component<any, any> {
	render() {
		return (
			<section className='grid app-wrapper'>
				<SearchContainer row='row-1' column='col-12' />
				<CarouselContainer row='row-1' column='col-8' />
				<CardComponent
					title='Singapore'
					columnClass='col-4'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
					theme='cyan'
				/>
				<section id='map' className='bordered col-4' />
				<CardComponent
					type='weather'
					columnClass='col-8'
					theme='light-purple'
				/>
				<CardComponent
					type='icon'
					iconClasses='fab fa-4x fa-linkedin-in'
					columnClass='col-2'
					theme='linkedin'
				/>
				<CardComponent
					type='icon'
					iconClasses='fab fa-4x fa-twitter'
					columnClass='col-2'
					theme='twitter'
				/>
				<CardComponent
					type='icon'
					iconClasses='fab fa-4x fa-fw fa-facebook-f'
					columnClass='col-2'
					theme='facebook'
				/>
				<CardComponent
					type='icon'
					iconClasses='fab fa-4x fa-instagram'
					columnClass='col-2'
					theme='instagram'
				/>
			</section>
		);
	}
}

export default HomePage;