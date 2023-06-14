import axios from "axios";
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

class Searchs {
  history = ['Buenos Aires', 'Madrid'];

  constructor() {

  };

  get paramsMapbox() {
    return {
      'limit': 5,
      'language': 'en',
      'access_token': process.env.MAPBOX_TOKEN
    }
  };

  get paramsOpenWeather() {
    return {
      'appid': process.env.DEFAULT_W,
      'units': 'metric',
      'lang': 'en'
    }
  };

  async city(place = '') {
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
        params: this.paramsMapbox
      });

      const resp = await instance.get();

      return resp.data.features.map(place => ({
        id: place.id,
        name: place.place_name,
        lng: place.center[0],
        lat: place.center[1]
      }));

    } catch (error) {
      return [];
    }
  };

  async weatherByPlace(lat, lon) {
    try {
      const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather`,
        params: { ...this.paramsOpenWeather, lat, lon }
      })

      const resp = await instance.get();
      const { weather, main } = resp.data;
      return {
        description: weather[0].description,
        min: main.temp_min,
        max: main.temp_max,
        temp: main.temp
      }
    } catch (error) {
      console.log(error);
    }
  }

};

export default Searchs;
