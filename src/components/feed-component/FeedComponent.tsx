import React, { Component } from 'react';
import './FeedComponent.scss';
import { Place } from '../../models';

interface IProps {
	row: string;
	column: string;
	place: Place;
	theme: string;
}

class FeedComponent extends Component<IProps, any> {
	render() {
		return (
			<a href='#' className={`feed-component ${this.props.row} ${this.props.column} theme-${this.props.theme}`}>
				<img className='thumbnail' src={this.props.place.thumbnail} />
				<figcaption>
					<h3 className='title'>{this.props.place.name}</h3>
					<p className='summary'>{this.props.place.summary}</p>
				</figcaption>
			</a>
		);
	}
}

export default FeedComponent;
