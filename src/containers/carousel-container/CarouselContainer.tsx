import React, { Component } from 'react';
import { CarouselComponent } from '../../components';

interface IProps {
	row: string;
	column: string;
}

class CarouselContainer extends Component<IProps, any> {
	render() {
		return (
			<CarouselComponent
				row={this.props.row}
				column={this.props.column}
			/>
		);
	}
}

export default CarouselContainer;
