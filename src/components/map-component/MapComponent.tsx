import React, { Component } from 'react';
import './MapComponent.scss';

declare const tt: any;

interface IProps {
	row: string;
	column: string;
	latitude: number;
	longitude: number;
}

class MapComponent extends Component<IProps, any> {
	componentDidMount() {
		if (typeof tt !== 'undefined') {
			const map = tt.map({
				center: {
					lat: this.props.latitude,
					lon: this.props.longitude
				},
				container: 'map',
				key: 'RiSihI46NH978LRGa06sw4M2BtYGpeOt',
				language: 'en-US',
				style: 'tomtom://vector/1/basic-main',
				zoom: 10
			});
			map.addControl(new tt.FullscreenControl());
			map.addControl(new tt.NavigationControl());
		}
	}

	render() {
		return <section id='map' className={`map-component ${this.props.row} ${this.props.column}`} />;
	}
}

export default MapComponent;
