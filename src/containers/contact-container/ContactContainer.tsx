import React, { Component, Fragment } from 'react';
import { CardComponent } from '../../components';

interface IProps {
	row: string;
	column: string;
}

class ContactContainer extends Component<IProps, any> {
	render() {
		return (
			<Fragment>
				<CardComponent
					type='icon'
					iconClasses='fab fa-4x fa-linkedin-in'
					row='row-1'
					column='col-2'
					theme='linkedin'
					target='https://www.linkedin.com/in/tamal-mukhopadhyay-29168024/'
				/>
				<CardComponent
					type='icon'
					iconClasses='fab fa-4x fa-twitter'
					row='row-1'
					column='col-2'
					theme='twitter'
					target='https://twitter.com/tamalhunk'
				/>
				<CardComponent
					type='icon'
					iconClasses='fab fa-4x fa-fw fa-facebook-f'
					row='row-1'
					column='col-2'
					theme='facebook'
					target='https://www.facebook.com/tamal.mukherjee.180'
				/>
				<CardComponent
					type='icon'
					iconClasses='fab fa-4x fa-github'
					row='row-1'
					column='col-2'
					theme='black'
					target='https://github.com/tmukhopadhyay'
				/>
			</Fragment>
		);
	}
}

export default ContactContainer;
