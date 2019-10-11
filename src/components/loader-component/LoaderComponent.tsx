import React, { Component } from 'react';
import './LoaderComponent.scss';

class LoaderComponent extends Component {
	render() {
		return (
			<section className='loader-component'>
				<svg className='spinner' viewBox='0 0 50 50'>
					<circle className='path' cx='25' cy='25' r='20' fill='none' strokeWidth='2' />
				</svg>
			</section>
		);
	}
}

export default LoaderComponent;
