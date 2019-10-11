import React, { Component } from 'react';
import { VideoComponent } from '../../components';
import { MediaDirector } from '../../directors';

interface IProps {
	row: string;
	column: string;
}

class VideoContainer extends Component<IProps, any> {
	render() {
		const mediaObj = {
			url: 'https://media-cdn.sygictraveldata.com/media/612664395a40232133447d33247d383432323031353032.mp4',
			attribution: {
				title: 'Marina Bay and the skyline of the Central Business District of Singapore at dusk, photographed from the Marina Bay Sands Hotel.'
			}
		};

		return (
			<VideoComponent row={this.props.row} column={this.props.column} media={new MediaDirector().construct(mediaObj)} />
		);
	}
}

export default VideoContainer;
