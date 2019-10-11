export class Weather {
	constructor(
		public id: string,
		public date: Date,
		public temperature: number,
		public min: number,
		public max: number,
		public humidity: number,
		public description: string,
		public icon: string
	) {}
}
