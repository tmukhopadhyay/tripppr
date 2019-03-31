import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch
	} from 'react-router-dom';
import { FooterComponent, HeaderComponent } from './components';
import { RouteConfig, routes } from './config/routes.config';

class App extends Component<any, any> {
	render() {
		return (
			<section>
				<HeaderComponent />
				<Router>
					<section>
						<Switch>
							{routes.map((route: RouteConfig, index: number) => (
								<Route
									key={index}
									path={route.path}
									exact
									component={route.component}
								/>
							))}
							<Redirect to='/' />
						</Switch>
					</section>
				</Router>
				<FooterComponent />
			</section>
		);
	}
}

export default App;
