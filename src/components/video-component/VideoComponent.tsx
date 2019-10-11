import React, { Component } from 'react';
import './VideoComponent.scss';
import { Media } from '../../models';

interface IProps {
	row: string;
	column: string;
	media: Media;
}

class VideoComponent extends Component<IProps, any> {
	render() {
		return (
			<section className={`video-component ${this.props.row} ${this.props.column}`}>
				<video controls muted>
					<source src={this.props.media.url} type='video/mp4' />
					Sorry, your browser doesn't support embedded videos.
				</video>
			</section>
		);
	}
}

export default VideoComponent;
