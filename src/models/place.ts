export class Place {
	constructor(
		public id: string,
		public level: string,
		public rating: number,
		public name: string,
		public url: string,
		public summary: string,
		public thumbnail: string,
		public categories: Array<string>
	) {}
}
