import React, { Component } from 'react';
import './SearchComponent.scss';

interface IProps {
	row: string;
	column: string;
}

class SearchComponent extends Component<IProps, any> {
	render() {
		return (
			<section className={`grid search-component ${this.props.row} ${this.props.column}`}>
				<input
					type='text'
					placeholder='Search places, cities, countries and continents'
					className='col-10 search-box theme-steel'
				/>
				<button className='search-button theme-dark-blue col-2'>
					<i className='fas fa-2x fa-search' />
				</button>
			</section>
		);
	}
}

export default SearchComponent;
