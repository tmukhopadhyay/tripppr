import React, { Component } from 'react';
import './MapComponent.scss';

declare const google: any;

interface IProps {
	row: string;
	column: string;
}

class MapComponent extends Component<IProps, any> {

	componentDidMount() {
		if (typeof google !== 'undefined') {
			const map = new google.maps.Map(document.getElementById('map'), {
				center: { lat: -34.397, lng: 150.644 },
				zoom: 8
			});
		}
	}

	render() {
		return (
			<section id='map' className={`map ${this.props.row} ${this.props.column}`}></section>
		);
	}
}

export default MapComponent;
