import React, { Component } from 'react';
import './CardComponent.scss';

interface IProps {
	type: string;
	row: string;
	column: string;
	theme: string;
	target?: string;
	title?: string;
	summary?: string;
	iconClasses?: string;
}

class CardComponent extends Component<IProps, any> {
	public static defaultProps = {
		type: 'default',
		theme: 'default'
	};

	private getIconCard(): JSX.Element {
		const target = this.props.target ? '_blank' : '_self';
		return (
			<figure className={`card-wrapper ${this.props.row} ${this.props.column}`}>
				<a
					href={this.props.target || '#'}
					target='_'
					className={`card-component icon-card theme-${this.props.theme}`}
				>
					<i className={this.props.iconClasses} />
				</a>
			</figure>
		);
	}

	private getDefaultCard(): JSX.Element {
		return (
			<section
				className={`card-component default-card ${this.props.row} ${this.props.column} theme-${
					this.props.theme
				}`}
			>
				{this.props.title && <h3 className='title'>{this.props.title}</h3>}
				{this.props.summary && <p className='description'>{this.props.summary}</p>}
			</section>
		);
	}

	getCard(): JSX.Element {
		switch (this.props.type) {
			case 'icon':
				return this.getIconCard();
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
