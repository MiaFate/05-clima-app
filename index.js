import colors from "colors";

import { inquirerMenu, pause, readInput, placesList } from "./helpers/inquirer.js"
import Searchs from "./models/searchs.js";

const main = async () => {
  let opt;
  const searchs = new Searchs();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        //Mostrar mensajes
        const prompt = await readInput('City: ');
        //Buscar los lugares
        const places = await searchs.city(prompt);
        //Seleccionar el lugar
        const id = await placesList(places);
        const selectedPlace = places.find(place => place.id = id)
        //Ciima
        const weather = await searchs.weatherByPlace(selectedPlace.lat, selectedPlace.lng);

        //mostrar resultados
        //console.clear()
        console.log('\nCity information\n'.green);
        console.log('City:', selectedPlace.name);
        console.log('lat:', selectedPlace.lat);
        console.log('Lng:', selectedPlace.lng);
        console.log('Temperature:', weather.temp);
        console.log('Min:', weather.min);
        console.log('Max:', weather.max);
        console.log('Description:', weather.description.brightGreen);


        break;

      default:
        break;
    }
    if (opt !== 0) await pause();
  } while (opt !== 0);
};

main();
