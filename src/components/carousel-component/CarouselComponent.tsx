import Carousel from 'nuka-carousel';
import React, { Component } from 'react';
import './CarouselComponent.scss';

interface IProps {
	row: string;
	column: string;
}

class CarouselComponent extends Component<IProps, any> {
	render() {
		return (
			<section className={`${this.props.row} ${this.props.column}`}>
				<Carousel autoplay={true}>
					<img src='http://placehold.it/1000x400/ffffff/c0392b/&text=slide1' />
					<img src='http://placehold.it/1000x400/ffffff/c0392b/&text=slide2' />
				</Carousel>
			</section>
		);
	}
}

export default CarouselComponent;
