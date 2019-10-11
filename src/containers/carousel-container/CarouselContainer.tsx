import React, { Component } from 'react';
import { CarouselComponent } from '../../components';
import { MediaDirector } from '../../directors';

interface IProps {
	row: string;
	column: string;
}

class CarouselContainer extends Component<IProps, any> {
	render() {
		const medias = [
			{
				url:
					'https://media-cdn.sygictraveldata.com/media/612664395a40232133447d33247d383332353533303035.jpg',
				attribution: {
					title:
						'Marina Bay and the skyline of the Central Business District of Singapore at dusk, photographed from the Marina Bay Sands Hotel.'
				}
			},
			{
				url:
					'https://media-cdn.sygictraveldata.com/media/612664395a40232133447d33247d383332353533303034.jpg',
				attribution: {
					title: 'The Merlion statue in Merlion Park, with the skyscrapers behind.'
				}
			},
			{
				url:
					'https://media-cdn.sygictraveldata.com/media/612664395a40232133447d33247d383335383531303438.jpg',
				attribution: {
					title:
						'Evening view of the Central Business District from the Esplanade Promenade. Downtown Core, Central Region, Singapore.'
				}
			},
			{
				url:
					'https://media-cdn.sygictraveldata.com/media/612664395a40232133447d33247d383335383531303439.jpg',
				attribution: {
					title: 'Singapore city skyline'
				}
			},
			{
				url:
					'https://media-cdn.sygictraveldata.com/media/612664395a40232133447d33247d383336343938353934.jpg',
				attribution: {
					title: 'Singapore'
				}
			}
		];

		return (
			<CarouselComponent
				row={this.props.row}
				column={this.props.column}
				medias={medias.map(mediaObj => new MediaDirector().construct(mediaObj))}
			/>
		);
	}
}

export default CarouselContainer;
