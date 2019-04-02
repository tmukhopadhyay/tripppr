import React, { Component } from 'react';

interface IProps {
	row: string;
	column: string;
}

class WeatherContainer extends Component<IProps, any> {
	render() {
		const theme = 'theme-light-purple';

		return (
			<section className={`sub-grid ${this.props.row} ${this.props.column}`}>
				<section className={`card-wrapper row-2 ${this.props.column}`}>
					<section className={`card ${theme}`} />
				</section>
				<section className={`card-wrapper row-1 col-1`}>
					<section className={`card ${theme}`} />
				</section>
				<section className={`card-wrapper row-1 col-1`}>
					<section className={`card ${theme}`} />
				</section>
				<section className={`card-wrapper row-1 col-1`}>
					<section className={`card ${theme}`} />
				</section>
				<section className={`card-wrapper row-1 col-1`}>
					<section className={`card ${theme}`} />
				</section>
			</section>
		);
	}
}

export default WeatherContainer;
