import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MapComponent } from '../../components';
import { Store, StoreState } from '../../models';
import { isEmpty } from '../../utilities';

interface IProps {
	row: string;
	column: string;
	dispatch: Function;
	position: StoreState;
}

class MapContainer extends Component<IProps, any> {
	render() {
		if (!this.props.position || isEmpty(this.props.position) || this.props.position.isFetching) {
			return <section />;
		} else {
			return (
				<MapComponent
					row={this.props.row}
					column={this.props.column}
					latitude={this.props.position.data.latitude}
					longitude={this.props.position.data.longitude}
				/>
			);
		}
	}
}

export default connect((store: Store) => ({
	position: store.position
}))(MapContainer);
