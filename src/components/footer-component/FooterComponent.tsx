import React, { Component } from 'react';
import './FooterComponent.scss';

class FooterComponent extends Component {
	render() {
		return (
			<footer className='footer'>
				<section className='grid app-wrapper'>
					<section className='col-8'>
						<p className='column-header'>Tripppr</p>
						<p className='column-content'>
							Our website gives you the tools to plan your next
							trip: in-depth information on destinations,
							inspiring ideas on what to see and do. At Tripppr,
							we believe travel can be a force for good – but we
							need to do our bit as a company too. We’ve always
							taken our responsibility seriously; after all,
							travel can only be as good as the world we explore.
							We’re aware of our impact on the environment and
							society, both as a business and as individuals.
							Here’s a bit about what we do to minimise that
							impact on the planet in relation to everything from
							paper to people.
						</p>
					</section>
					<p className='col-4 copyright'>
						&copy; 2019 Tripppr. All Rights Reserved.
					</p>
				</section>
			</footer>
		);
	}
}

export default FooterComponent;
