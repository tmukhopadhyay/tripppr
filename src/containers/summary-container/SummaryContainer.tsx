import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardComponent } from '../../components';
import { Store, StoreState } from '../../models';
import { isEmpty } from '../../utilities';

interface IProps {
	row: string;
	column: string;
	theme: string;
	dispatch: Function;
	place: StoreState;
}

class SummaryContainer extends Component<IProps, any> {
	render() {
		if (!this.props.place || isEmpty(this.props.place) || this.props.place.isFetching) {
			return <section />;
		} else {
			return (
				<CardComponent
					title={this.props.place.data.name}
					row='row-1'
					column='col-4'
					summary={this.props.place.data.description.text}
					theme={this.props.theme}
				/>
			);
		}
	}
}

export default connect((store: Store) => ({ place: store.place }))(SummaryContainer);
