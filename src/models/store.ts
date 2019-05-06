export interface Store {
	position: StoreState;
	weather: StoreState;
	place: StoreState;
}

export interface StoreState {
	isFetching: boolean;
	data: any;
}
