import React, { Component } from 'react';
import './MapComponent.scss';

declare const google: any;

interface IProps {
	row: string;
	column: string;
	latitude: number;
	longitude: number;
}

class MapComponent extends Component<IProps, any> {
	componentDidMount() {
		if (typeof google !== 'undefined') {
			new google.maps.Map(document.getElementById('map'), {
				center: { lat: this.props.latitude, lng: this.props.longitude },
				zoom: 10
			});
		}
	}

	render() {
		return <section id='map' className={`map-component ${this.props.row} ${this.props.column}`} />;
	}
}

export default MapComponent;
