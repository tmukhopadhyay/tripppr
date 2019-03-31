import HomePage from '../pages/home-page/HomePage';

export class RouteConfig {
	constructor(public path: string, public component: any) {}
}

export const routes = [new RouteConfig('/', HomePage)];
