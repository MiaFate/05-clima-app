import { inquirerMenu, pause, readInput } from "./helpers/inquirer.js"
import Searchs from "./models/searchs.js";

const main = async () => {
  let opt;
  const searchs = new Searchs();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        const place = await readInput('City: ');
        await searchs.city(place);
        console.log('\nCity information\n'.green);
        console.log('City:',);
        console.log('lat:',);
        console.log('Lng:',);
        console.log('Temperature:',);
        console.log('Min:',);
        console.log('Max:',);



        break;

      default:
        break;
    }
    if (opt !== 0) await pause();
  } while (opt !== 0);
};

main();
