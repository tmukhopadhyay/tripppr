import { Weather } from '../models';

export class WeatherDirector {
	private readonly weatherIcon: any = {
		'01d': 'fas fa-sun',
		'01n': 'fas fa-moon',
		'02d': 'fas fa-cloud-sun',
		'02n': 'fas fa-cloud-moon',
		'03d': 'fas fa-cloud',
		'03n': 'fas fa-cloud',
		'04d': 'fas fa-cloud',
		'04n': 'fas fa-cloud',
		'09d': 'fas fa-cloud-rain',
		'09n': 'fas fa-cloud-rain',
		'10d': 'fas fa-cloud-sun-rain',
		'10n': 'fas fa-cloud-moon-rain',
		'11d': 'fas fa-bolt',
		'11n': 'fas fa-bolt',
		'13d': 'fas fa-cloud-meatball',
		'13n': 'fas fa-cloud-meatball'
	};

	public construct(weatherObj: any) {
		return new Weather(
			weatherObj.weather[0].id,
			new Date(weatherObj.dt * 1000),
			Math.round(weatherObj.main.temp - 273.15),
			Math.round(weatherObj.main.temp_min - 273.15),
			Math.round(weatherObj.main.temp_max - 273.15),
			weatherObj.main.humidity,
			weatherObj.weather[0].description,
			this.weatherIcon[weatherObj.weather[0].icon]
		);
	}
}
