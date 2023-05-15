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
  }
  async city(place = '') {
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
        params: this.paramsMapbox
      });

      const resp = await instance.get();

      console.log(resp.data);
      return [];
    } catch (error) {
      return [];
    }
  };
};

export default Searchs;
