import React, { Component } from 'react';
import './HeaderComponent.scss';

class HeaderComponent extends Component {
	render() {
		return (
			<header className='app-wrapper header'>
				<h1 className='logo'>Tripppr</h1>
			</header>
		);
	}
}

export default HeaderComponent;
