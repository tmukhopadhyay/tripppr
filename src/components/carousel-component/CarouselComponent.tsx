import { CardComponent } from '..';
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { Media } from '../../models';
import './CarouselComponent.scss';

interface IProps {
	row: string;
	column: string;
	medias: Array<Media>;
}

class CarouselComponent extends Component<IProps, any> {
	private slider: any;
	private readonly settings = {
		adaptiveHeight: true,
		arrows: false,
		autoplay: true,
		dots: false,
		easing: 'ease-in-out',
		infinite: true,
		slidesToScroll: 1,
		speed: 1000
	};

	private showPreviousSlide(event: Event) {
		event.preventDefault();
		this.slider.slickPrev();
	}

	private showNextSlide(event: Event) {
		event.preventDefault();
		this.slider.slickNext();
	}

	render() {
		return (
			<section
				className={`carousel-component sub-grid grid-layout-column ${
					this.props.row
				} ${this.props.column}`}
			>
				<figure
					className={`arrow-container theme-facebook ${
						this.props.row
					} col-2`}
				>
					<a
						href='#'
						className='arrow'
						onClick={(event: any) => this.showPreviousSlide(event)}
					>
						<i className='fas fa-2x fa-chevron-circle-left' />
					</a>
				</figure>
				<section
					className={`slider ${this.props.row} col-${Number(
						this.props.column.split('-')[1]
					) - 4}`}
				>
					<Slider
						ref={slider => (this.slider = slider)}
						{...this.settings}
					>
						{this.props.medias.map(
							(media: Media, index: number) => (
								<figure key={index} className='image-wrapper'>
									<img src={media.url} />
									<figcaption>{media.title}</figcaption>
								</figure>
							)
						)}
					</Slider>
				</section>
				<figure
					className={`arrow-container theme-facebook ${
						this.props.row
					} col-2`}
				>
					<a
						href='#'
						className='arrow'
						onClick={(event: any) => this.showNextSlide(event)}
					>
						<i className='fas fa-2x fa-chevron-circle-right' />
					</a>
				</figure>
			</section>
		);
	}
}

export default CarouselComponent;
