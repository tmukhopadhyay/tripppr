import React, { Component } from 'react';
import { SearchComponent } from '../../components';

interface IProps {
	row: string;
	column: string;
}

class SearchContainer extends Component<IProps, any> {
	render() {
		return (
			<SearchComponent row={this.props.row} column={this.props.column} />
		);
	}
}

export default SearchContainer;
