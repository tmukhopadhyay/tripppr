import { Place } from '../models';

export class PlaceDirector {
	public construct(placeObj: any) {
		return new Place(
			placeObj.id,
			placeObj.level,
			placeObj.rating,
			placeObj.name,
			placeObj.url,
			placeObj.perex,
			placeObj.thumbnail_url,
			placeObj.categories
		);
	}
}
