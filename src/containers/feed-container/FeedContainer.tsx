import React, { Component } from 'react';
import { FeedComponent } from '../../components';
import { PlaceDirector } from '../../directors';

interface IProps {
	row: string;
	column: string;
	level: string;
	theme: string;
	title?: string;
	entries: number;
	seeMoreLink?: string;
}

class FeedContainer extends Component<IProps, any> {
	render() {
		const places = [
			{
				id: 'region:1976256',
				level: 'island',
				rating: 3.0012385638456,
				rating_local: 15.006192819228,
				quadkey: '132232213332233230',
				location: {
					lat: 1.4088259,
					lng: 103.9225729
				},
				bounding_box: {
					south: 1.401545,
					west: 103.9150262,
					north: 1.4174174,
					east: 103.9312058
				},
				name: 'Pulau Serangoon (Coney Island)',
				name_suffix: 'Singapore, Singapore',
				original_name: 'Pulau Serangoon (Coney Island)',
				url: 'https://go.sygic.com/travel/place?id=region:1976256',
				duration: 3600,
				marker: 'destination:island',
				categories: ['sightseeing'],
				parent_ids: ['poi:5104636', 'region:61341', 'city:3355', 'country:84', 'continent:4'],
				perex:
					'Coney Island, alternatively known as Pulau Serangoon, is a 133-hectare island located off the northeastern coast of Singapore within the…',
				customer_rating: null,
				star_rating: null,
				star_rating_unofficial: null,
				thumbnail_url: 'https://media-cdn.sygictraveldata.com/media/region:1976256'
			},
			{
				id: 'poi:5109538',
				level: 'region',
				rating: 1.002,
				rating_local: 5.01,
				quadkey: '132232213322221321',
				location: {
					lat: 1.4192999,
					lng: 103.7293172
				},
				bounding_box: {
					south: 1.4152827,
					west: 103.7199091,
					north: 1.4231475,
					east: 103.7346407
				},
				name: 'Kranji Marshes',
				name_suffix: 'Singapore, Singapore',
				original_name: 'Kranji Marshes',
				url: 'https://go.sygic.com/travel/place?id=poi:5109538',
				duration: 7200,
				marker: 'destination:region',
				categories: ['hiking', 'sightseeing'],
				parent_ids: ['region:61189', 'city:3355', 'country:84', 'continent:4'],
				perex: null,
				customer_rating: null,
				star_rating: null,
				star_rating_unofficial: null,
				thumbnail_url: 'https://media-cdn.sygictraveldata.com/media/poi:5109538'
			},
			{
				id: 'poi:36690',
				level: 'poi',
				rating: 0.79595709036903,
				rating_local: 2.851302761023949,
				quadkey: '132232231103123131',
				location: {
					lat: 1.2812926,
					lng: 103.864353
				},
				bounding_box: {
					south: 1.2759258,
					west: 103.8594258,
					north: 1.2954896,
					east: 103.8766799
				},
				name: 'Gardens by the Bay',
				name_suffix: 'Singapore, Singapore',
				original_name: 'Gardens by the Bay',
				url: 'https://go.sygic.com/travel/place?id=poi:36690',
				duration: 10800,
				marker: 'discovering:garden:botanical',
				categories: ['hiking', 'sightseeing', 'relaxing', 'discovering'],
				parent_ids: ['region:61340', 'city:3355', 'region:1976232', 'country:84', 'continent:4'],
				perex:
					'This huge garden complex featuring the futuristic Supertrees is a reason in itself to visit Singapore.',
				customer_rating: null,
				star_rating: null,
				star_rating_unofficial: null,
				thumbnail_url: 'https://media-cdn.sygictraveldata.com/media/poi:36690'
			},
			{
				id: 'poi:21423',
				level: 'poi',
				rating: 0.6885168893098,
				rating_local: 2.466427061527234,
				quadkey: '132232231103121220',
				location: {
					lat: 1.2869711,
					lng: 103.8547258
				},
				bounding_box: null,
				name: 'Merlion Park',
				name_suffix: 'Singapore, Singapore',
				original_name: 'Merlion Park',
				url: 'https://go.sygic.com/travel/place?id=poi:21423',
				duration: 1800,
				marker: 'hiking:viewpoint',
				categories: ['sightseeing', 'relaxing'],
				parent_ids: ['region:61340', 'city:3355', 'country:84', 'continent:4'],
				perex:
					'This park is notable especially because it holds the iconic landmark and "mascot" of Singapore: Merlion, a mythical half-lion, half-fish…',
				customer_rating: null,
				star_rating: null,
				star_rating_unofficial: null,
				thumbnail_url: 'https://media-cdn.sygictraveldata.com/media/poi:21423'
			},
			{
				id: 'city:3346',
				level: 'city',
				rating: 10.011947944297,
				rating_local: 50.059739721485,
				quadkey: '132232213320322222',
				location: {
					lat: 1.4953041,
					lng: 103.7550839
				},
				bounding_box: {
					south: 1.4414229,
					west: 103.701185,
					north: 1.549184,
					east: 103.8089828
				},
				name: 'Johor Bahru',
				name_suffix: 'Asia',
				original_name: 'Johor Bahru',
				url: 'https://go.sygic.com/travel/place?id=city:3346',
				duration: 3600,
				marker: 'destination:city',
				categories: [],
				parent_ids: ['continent:4'],
				perex: null,
				customer_rating: null,
				star_rating: null,
				star_rating_unofficial: null,
				thumbnail_url: 'https://media-cdn.sygictraveldata.com/media/city:3346'
			},
			{
				id: 'poi:34365313',
				level: 'city',
				rating: 10.003,
				rating_local: 50.015,
				quadkey: '132232213233221102',
				location: {
					lat: 1.4265858,
					lng: 103.6402051
				},
				bounding_box: {
					south: 1.372703,
					west: 103.5863062,
					north: 1.4804674,
					east: 103.694104
				},
				name: 'Iskandar Puteri',
				name_suffix: 'Asia',
				original_name: 'Iskandar Puteri',
				url: 'https://go.sygic.com/travel/place?id=poi:34365313',
				duration: 3600,
				marker: 'destination:city',
				categories: [],
				parent_ids: ['continent:4'],
				perex:
					'Iskandar Puteri is a city in Johor Bahru District, Johor, Malaysia. Situated along the Straits of Johor at the southern end of the Malay…',
				customer_rating: null,
				star_rating: null,
				star_rating_unofficial: null,
				thumbnail_url: 'https://media-cdn.sygictraveldata.com/media/poi:34365313'
			},
			{
				id: 'poi:33326838',
				level: 'city',
				rating: 10.003,
				rating_local: 50.015,
				quadkey: '132232213332021033',
				location: {
					lat: 1.466983,
					lng: 103.9022758
				},
				bounding_box: {
					south: 1.4131011,
					west: 103.8483769,
					north: 1.5208636,
					east: 103.9561747
				},
				name: 'Pasir Gudang',
				name_suffix: 'Asia',
				original_name: 'Pasir Gudang',
				url: 'https://go.sygic.com/travel/place?id=poi:33326838',
				duration: 3600,
				marker: 'destination:city',
				categories: [],
				parent_ids: ['continent:4'],
				perex:
					'Pasir Gudang is an industrial town located in Mukim Plentong, Johor Bahru District, Johor, Malaysia.',
				customer_rating: null,
				star_rating: null,
				star_rating_unofficial: null,
				thumbnail_url: 'https://media-cdn.sygictraveldata.com/media/poi:33326838'
			},
			{
				id: 'city:3354',
				level: 'city',
				rating: 10.002241210879,
				rating_local: 50.011206054395,
				quadkey: '132232231110211020',
				location: {
					lat: 1.3589,
					lng: 103.9202
				},
				bounding_box: {
					south: 1.3139838,
					west: 103.8752724,
					north: 1.4038153,
					east: 103.9651292
				},
				name: 'Paya Lebar',
				name_suffix: 'Singapore',
				original_name: 'Paya Lebar',
				url: 'https://go.sygic.com/travel/place?id=city:3354',
				duration: 3600,
				marker: 'destination:city',
				categories: [],
				parent_ids: ['country:84'],
				perex: null,
				customer_rating: null,
				star_rating: null,
				star_rating_unofficial: null,
				thumbnail_url: 'https://media-cdn.sygictraveldata.com/media/city:3354'
			}
		];

		return (
			<section className={`sub-grid ${this.props.row} ${this.props.column}`}>
				{this.props.title && (
					<h4 className={`feed-component ${this.props.row} ${this.props.column} theme-${this.props.theme}`}>
						{this.props.title}
					</h4>
				)}
				{places
					.filter((place: any) => place.level.match(new RegExp(this.props.level)))
					.slice(0, this.props.entries)
					.map((place: any) => (
						<FeedComponent
							key={place.id}
							row='row-1'
							column={this.props.column}
							theme={this.props.theme}
							place={new PlaceDirector().construct(place)}
						/>
					))}
				{this.props.seeMoreLink && (
					<a
						href={this.props.seeMoreLink}
						className={`feed-component see-more ${this.props.row} ${this.props.column} theme-${
							this.props.theme
						}`}
					>
						<span className='caption'>See More</span>
						<i className='icon fas fa-angle-right' />
					</a>
				)}
			</section>
		);
	}
}

export default FeedContainer;
