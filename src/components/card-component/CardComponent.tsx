import React, { Component } from 'react';
import './CardComponent.scss';

interface IProps {
	type: string;
	title?: string;
	description?: string;
	iconClasses?: string;
	columnClass?: string;
	theme?: string;
	image?: string;
}

class CardComponent extends Component<IProps, any> {
	public static defaultProps = {
		type: 'default'
	};

	private getIconCard(): JSX.Element {
		return (
			<section className={`card-wrapper ${this.props.columnClass}`}>
				<section
					className={`card centered-content theme-${
						this.props.theme
					}`}
				>
					<i className={this.props.iconClasses} />
				</section>
			</section>
		);
	}

	private getDefaultCard(): JSX.Element {
		return (
			<section className={`card-wrapper ${this.props.columnClass}`}>
				<section className={`card theme-${this.props.theme}`}>
					{this.props.image && (
						<img className='image' src={this.props.image} />
					)}
					{this.props.title && (
						<h3 className='title'>{this.props.title}</h3>
					)}
					{this.props.description && (
						<p className='description'>{this.props.description}</p>
					)}
				</section>
			</section>
		);
	}

	private getWeatherCard(): JSX.Element {
		return (
			<section className='col-8 row-3'>
				<section
					className={`card-wrapper ${this.props.columnClass} row-2`}
				>
					<section className={`card theme-${this.props.theme}`} />
				</section>
				<section className={`card-wrapper col-2 row-1`}>
					<section className={`card theme-${this.props.theme}`} />
				</section>
				<section className={`card-wrapper col-2 row-1`}>
					<section className={`card theme-${this.props.theme}`} />
				</section>
				<section className={`card-wrapper col-2 row-1`}>
					<section className={`card theme-${this.props.theme}`} />
				</section>
				<section className={`card-wrapper col-2 row-1`}>
					<section className={`card theme-${this.props.theme}`} />
				</section>
			</section>
		);
	}

	getCard(): JSX.Element {
		switch (this.props.type) {
			case 'icon':
				return this.getIconCard();
				break;
			case 'weather':
				return this.getWeatherCard();
				break;
			default:
				return this.getDefaultCard();
		}
	}

	render() {
		return this.getCard();
	}
}

export default CardComponent;
