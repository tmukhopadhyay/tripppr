import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { fetchCurrentPosition } from './actions';
import { fetchPlace } from './actions';
import { FooterComponent, HeaderComponent, LoaderComponent } from './components';
import { RouteConfig, routes } from './config/routes.config';
import { Store, StoreState } from './models';
import { isEmpty } from './utilities';

interface IProps {
	dispatch: Function;
	position: StoreState;
	place: StoreState;
}

class App extends Component<IProps, any> {
	constructor(props: IProps) {
		super(props);
		this.props.dispatch(fetchCurrentPosition());
	}

	componentDidUpdate() {
		if (this.props.position && !this.props.position.isFetching && isEmpty(this.props.place)) {
			this.props.dispatch(fetchPlace(this.props.position));
		}
	}

	render() {
		if (!this.props.position || isEmpty(this.props.position) || this.props.position.isFetching) {
			return <LoaderComponent />;
		} else {
			return (
				<Fragment>
					<HeaderComponent />
					<Router>
						<section>
							<Switch>
								{routes.map((route: RouteConfig, index: number) => (
									<Route key={index} path={route.path} exact component={route.component} />
								))}
								<Redirect to='/' />
							</Switch>
						</section>
					</Router>
					<FooterComponent />
				</Fragment>
			);
		}
	}
}

export default connect((store: Store) => ({
	position: store.position,
	place: store.place
}))(App);
