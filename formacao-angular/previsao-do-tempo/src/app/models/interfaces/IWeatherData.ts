export interface IWeatherData {
  coord: {
    lat: number;
    lon: number;
  };

  base: string;

  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string
    }
  ];

  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  },

  visibility: number;

  wind: {
    deg: number;
    speed: number;
  }

  clouds: {
    all: number;
  }

  dt: number;

  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  }

  timezone: number;
  id: number;
  name: string;
  cod: number;


}
