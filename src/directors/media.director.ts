import { Media } from '../models';

export class MediaDirector {
	public construct(mediaObj: any) {
		return new Media(
			mediaObj.id,
			mediaObj.type,
			mediaObj.url,
			mediaObj.attribution.title
		);
	}
}
